import { ValidatorFn } from "@angular/forms";


export function imageUrlValidator(): ValidatorFn {
    const regex = /^https:\/\/[a-zA-Z0-9\-._~:\/?#\[\]@!$&'()*+,;=%]+$/
    // const regex = new RegExp("^https:\/\/[a-zA-Z0-9\-._~:\/?#\[\]@!$&'()*+,;=%]+$");

    return (control) => {
        const isInvalid = control.value === '' || regex.test(control.value);
        return isInvalid ? null : { urlValidator: true };
    }
}