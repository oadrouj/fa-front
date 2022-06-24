import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalEventsService } from '@shared/globalEventsService';
import { CustomAccountServiceProxy, GeneralInfosDto, InfosEntrepriseServiceProxy, TvaCurrencyDto, UserLoginInfoDto, UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { ChangeProfileContainerTitleService } from '@shared/services/change-profile-container-title.service';
import { AppSessionService } from '@shared/session/app-session.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { MustMatch } from '@shared/helpers/must-match.validator';
import { AsyncIsEmailUniqueValidator } from '@shared/helpers/async-email-unique.validator';
import { ToastService } from '@shared/services/toast.service';
import { finalize, takeUntil, first, map } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy  {

  dynamicTitle = 'Paramètres';
  favIcon: HTMLLinkElement = document.querySelector('#favIcon')
  public $destroyed = new Subject<any>();
  
  formGroup: FormGroup; 
  formGroupPass: FormGroup; 
  formGroupMail: FormGroup; 

  tvas :string[]=["0%","10%","14%","20%"]
  devises: string[];
  selectedTva :string = "20%";
  selectedDevise :string = "MAD";


  userSubject = new Subject<UserLoginInfoDto>();
  userSubscription :Subscription;
  user: UserLoginInfoDto;

  dialogTitle: string
  dialogDisplay = false;

  dialogTitleMail: string
  dialogDisplayMail = false;

  hideCurrentPass = true;

  loadingTvaCurrency = false;
  loadingPass = false;
  loadingMail = false;
  iconClasses= "";
  iconClassesMail= "";
  iconClassesTvaCurrency= "";

  emailAddressExiste: boolean = false;

  tvaCurrencyDto: TvaCurrencyDto;

  generalInfosDto: GeneralInfosDto;

  constructor(
    private _globalEventsService: GlobalEventsService,
    private _changeProfileContainerTitleService: ChangeProfileContainerTitleService,
    private formBuilder: FormBuilder,
    private appSessionService: AppSessionService,
    private _customAccountSP : CustomAccountServiceProxy,
    private _toastService: ToastService,
    private _infosEntrepriseService: InfosEntrepriseServiceProxy,
  ) { }

  ngOnInit() : void {

    this.userSubscription = this.userSubject.subscribe(user => {
      this.user = user;
    })

    this._globalEventsService.announcedThePageChangedColorSubject(
      `var(--green-color`,
    )

    this._changeProfileContainerTitleService.changeTitle$.subscribe(res => {
      this.dynamicTitle = res
    })

    this.favIcon.href = 'assets/img/ParametreIcon.png'
    this.initForm()
    this.initFormPass();
    this.initFormMail();
    this.getAllCurrencies();
    this.getAllTva();
    this.getCurrentTvaAndCurrency();
    

    this.userSubject.next(this.appSessionService.user);
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
    this.$destroyed.next();
    this.$destroyed.complete();
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      'tva': [null, [Validators.required]],
      'devise': [null, [Validators.required]],
      'validate': ''
    });
  }

  setValueForm(){
    this.f.tva.setValue(this.selectedTva);
    this.f.devise.setValue(this.selectedDevise);
  }

  get f(){
    return this.formGroup.controls;
  }
  get fPass(){
    return this.formGroupPass.controls;
  }
  get fMail(){
    return this.formGroupMail.controls;
  }

  getAllCurrencies() {
    fetch('/assets/json/currencies.json')
      .then((res) => res.json())
      .then((res) => (this.devises = Object.keys(res)))
  }

  getAllTva() {
    fetch('/assets/json/tva.json')
      .then((res) => res.json())
      .then((res) => (this.tvas = Object.keys(res)))
  }

  getCurrentTvaAndCurrency(){
    let observer = {
      next: result=> {
        if (result){
          this.generalInfosDto = result;
          this.tvaCurrencyDto = new TvaCurrencyDto({
            "id": this.generalInfosDto.id,  
            "tva": this.generalInfosDto.tva,
            "currency": this.generalInfosDto.currency
            })
          if(result.tva != null) this.selectedTva = result.tva; 
          if(result.currency != null) this.selectedDevise = result.currency; 
          this.setValueForm();
        }else{
          console.log("No infos found");
        }
      },
      error: error =>{
        console.log(error)
      }
    }

    this._infosEntrepriseService
    .getGeneralInfos()
    .pipe(
      takeUntil(this.$destroyed)
    )
    .subscribe(observer)
  }

  openChangePass(){
    
    this.dialogTitle="Changez votre mot de passe"
    this.dialogDisplay =true;
  }

  closeChangePass(){
    this.formGroupPass.reset();
    this.dialogDisplay =false;
  }

  openChangeMail(){
    this.fMail.emailAddress.setValue(this.user.emailAddress);
    this.dialogTitleMail="Changez votre adresse email"
    this.dialogDisplayMail =true;
  }

  closeChangeMail(){
    this.formGroupMail.reset();
    this.dialogDisplayMail =false;
  }

  initFormPass(){
    let passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    this.formGroupPass = this.formBuilder.group({
      'currentPassword': [null, [Validators.required]],
      'newPassword': [null, [Validators.required, Validators.pattern(passwordRegex)]],
      'confirmPassword': [null, [Validators.required, Validators.pattern(passwordRegex)]],
      'validate': ''
    }, {
      validator: MustMatch('newPassword', 'confirmPassword')
    });
  }

  initFormMail(){
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroupMail = this.formBuilder.group({
      'emailAddress': [null, [Validators.required, Validators.pattern(emailregex)], [AsyncIsEmailUniqueValidator.createValidator(this._customAccountSP)]],
      'validate': ''
    });
  }

  submitTvaCurrency(){
    let observer = {
      next: (res) => {
        if (res) {
          this._toastService.success({
            detail: 'Vos paramètres ont été enregistrés avec succés',
          })
        } else {
          this._toastService.error({
            detail: 'Une erreur s\'est produite lors de la modification',
          })
        }
       
      },
      error: error =>{
        console.log(error)
      }
    }

    this.loadingTvaCurrency =true;
    this.iconClassesTvaCurrency="pi pi-spin pi-spinner";

    if(this.tvaCurrencyDto.id){
      let tvaCurrencyDto = new TvaCurrencyDto({
        ...this.tvaCurrencyDto,
        tva: this.f.tva.value,
        currency: this.f.devise.value
      })
      this._infosEntrepriseService
        .updateTvaAndCurrency(tvaCurrencyDto)
        .pipe(
          takeUntil(this.$destroyed), 
          finalize(() => {this.loadingTvaCurrency = false ;this.iconClassesTvaCurrency=""; })
        )
        .subscribe(observer);
    }
  }

  submitChangePass(){
    let observer = {
      next: result => {
        if (result){
          this.closeChangePass()
          this._toastService.info({
            summary: 'Opération réussie',
            detail: 'Votre mot de passe a été modifié avec succés.',
          })
        }else{
          console.log("An error has occured")
        }
       
      },
      error: error =>{
        console.log(error)
      }
    }

    this.loadingPass =true;
    this.iconClasses="pi pi-spin pi-spinner";
    this._customAccountSP
    .updatePassword(
      this.user.id,
      this.fPass.currentPassword.value,
      this.fPass.newPassword.value,
      this.fPass.confirmPassword.value,
    ).pipe(
      takeUntil(this.$destroyed), 
      finalize(() => {this.loadingPass = false ;this.iconClasses=""; })
    )
    .subscribe(observer)
  }

  submitChangeMail(){
    let observer = {
      next: result => {
        if (result){
          this.closeChangeMail()
          this.refreshUserInfo();
          this._toastService.info({
            summary: 'Opération réussie',
            detail: 'Votre adresse email a été modifiée avec succés.',
          })
        }
      },
      error: error =>{
        console.log(error)
      }
    }

    this.loadingMail =true;
    this.iconClassesMail="pi pi-spin pi-spinner";
     this._customAccountSP
    .updateMail(
      this.user.id,
      this.fMail.emailAddress.value,
    ).pipe(
      takeUntil(this.$destroyed), 
      finalize(() => {this.loadingMail = false ;this.iconClassesMail=""; })
    )
    .subscribe(observer) 
  }

  refreshUserInfo(){
    let observer = {
      next: result => {
        console.log(result);
        this.userSubject.next(result);
      },
      error: error =>{
        console.log(error)
      }
    }
    this._customAccountSP.getUserById(this.user.id).pipe(
      first()
    ).subscribe(observer);
  }
}
