import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  userForm: FormGroup;
  userId: string | undefined; 
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route : ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      "email": [''],
      "password":[''],
      // Add other form controls for other user data fields
    });
  }
  id = this.route.snapshot.paramMap.get('id');
  password:any='';
  editUser(){
    this.password = this.userForm.get('password')?.value ||'';
    const userData ={password:this.password, id:this.id};
    this.http.put(`http://localhost:3000/userEdit/${this.id}`, userData).subscribe(
      (response) => {
        // Handle the response from the server (e.g., registration success or failure)
        console.log('Response:', response);
        
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}

