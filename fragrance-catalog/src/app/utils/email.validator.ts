import { ValidatorFn } from "@angular/forms";


export function emailValidator(): ValidatorFn {
    const regex = new RegExp('^[a-zA-Z0-9._]+@(gmail\.com|[a-zA-Z]+\.bg)$');

    return (control) => {
        const isInvalid = control.value === '' || regex.test(control.value);
        return isInvalid ? null : { emailValidator: true };
    }
}