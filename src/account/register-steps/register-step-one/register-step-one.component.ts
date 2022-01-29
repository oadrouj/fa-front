import { Component, Injector } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { finalize } from 'rxjs/operators'
import { AppComponentBase } from '@shared/app-component-base'
import {
  AccountServiceProxy,
  AuthenticateModel,
  CustomAccountServiceProxy,
  RegisterInput,
  RegisterOutput,
} from '@shared/service-proxies/service-proxies'
import { accountModuleAnimation } from '@shared/animations/routerTransition'
import { AppAuthService } from '@shared/auth/app-auth.service'
import { bootloader } from '@angularclass/hmr'

@Component({
  selector: 'app-register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.css'],
})
export class RegisterStepOneComponent extends AppComponentBase {
  model: RegisterInput = new RegisterInput()
  saving = false

  emailAddressExiste: boolean = false
  emailRequired: boolean = false
  emailNonValide: boolean = false

  firstPassword: string
  passwordRequired: boolean = false
  passwordDontMatch: boolean = false
  constructor(
    injector: Injector,
    private _accountService: AccountServiceProxy,
    private _router: Router,
    private _customAccountService: CustomAccountServiceProxy,
    private _authService: AppAuthService,
  ) {
    super(injector)
  }

  async validateEmail(): Promise<boolean> {
    var email = this.model.emailAddress
    this.emailRequired = !(email != undefined && email.trim().length > 0)
    if (this.emailRequired) return false

    const regularExpressionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/
    this.emailNonValide = !regularExpressionEmail.test(
      String(email).toLowerCase(),
    )
    if (this.emailNonValide) return false

    this.emailAddressExiste = !(await this._customAccountService
      .isEmailAddresUnique(email)
      .toPromise<boolean>())
    if (this.emailAddressExiste) return false
    return true
  }

  passwordDidntRepectRegex: boolean = false

  validatePassword(): boolean {
    const regularExpressionEmail = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    this.passwordDidntRepectRegex = !regularExpressionEmail.test(
      String(this.firstPassword),
    )
    this.passwordDontMatch = !(this.firstPassword == this.model.password)
    if (this.passwordDidntRepectRegex || this.passwordDontMatch) return false
    return true
  }

  async save() {
    var isFormValid = await this.validateEmail()
    isFormValid = isFormValid && this.validatePassword()

    if (isFormValid) {
      this.saving = true
      this.model.surname = 'surname'
      this.model.name = 'name'
      this.model.userName = this.model.emailAddress
      this._accountService
        .register(this.model)
        .pipe(
          finalize(() => {
            this.saving = false
          }),
        )
        .subscribe((result: RegisterOutput) => {
          if(result.userId){
            this.saving = true
            
            this._authService.saveAccessTokenAfterSignup(new AuthenticateModel({
              userNameOrEmailAddress: this.model.emailAddress,
              password: this.model.password,
              rememberClient: true
            }))

            this._customAccountService
              .sendConfirmationEmail(
                this.model.emailAddress,
                this.model.name,
                result.userId,
              )
              .subscribe((res) => {})
  
            this._router.navigate(['/account/redirect'], {
              state: {
                route: '/account/reister',
                step: '2',
                registerOutput: result,
              },
            })
          }
         
        })
    }
  }
}
