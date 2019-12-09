import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class CustomValidators {

    static forbiddenName(control: FormControl): {[s: string]: boolean} {
        if (control.value === 'Test') {
            return {'nameIsForbidden': true};
        } else {
            return null;
        }
    }

    static forbiddenNameAsync(control: FormControl): Promise<any> | Observable<any> {
        return new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Test') {
                    resolve({'nameIsForbidden': true});
                } else {
                    resolve(null);
                }
            }, 1500);
        });
    }

}
