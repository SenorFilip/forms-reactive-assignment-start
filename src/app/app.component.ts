import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  statuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.forbiddenNameAsync),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  forbiddenName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'nameIsForbidden': true};
    } else {
      return null;
    }
  }

  forbiddenNameAsync(control: FormControl): Promise<any> | Observable<any> {
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
