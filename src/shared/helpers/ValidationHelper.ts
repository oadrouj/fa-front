export class ValidationHelper {

    static enableCssValidationClass(form: HTMLFormElement) {
        form.nativeElement.classList.add('submitted')
    }

    static disableCssValidationClass(form: HTMLFormElement) {
        form.nativeElement.classList.remove('submitted')
    }
}

