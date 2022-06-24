import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
  } from '@angular/forms';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { CustomAccountServiceProxy } from '../service-proxies/service-proxies';

  
  export class AsyncIsEmailUniqueValidator {
    static createValidator(_customAccountSP: CustomAccountServiceProxy): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors> => {
         return _customAccountSP
            .isEmailAddresUnique(control.value).pipe(
                map((result: boolean) =>
                  result ? null : { emailExists: true }
                )
              ) as Observable<ValidationErrors>;
      };
    }
  }