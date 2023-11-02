import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  userForm: FormGroup;
  userId: string | undefined; 
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Add other form controls for other user data fields
    });
  }
}
