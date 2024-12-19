import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
  isSubmittedLogin: boolean = false;
  isSubmittedSignUp: boolean = false;



  onSubmit(form: NgForm, type: string) {
    type == 'login' ? this.isSubmittedLogin = true : this.isSubmittedSignUp = true
    console.log(form);
  }

}
