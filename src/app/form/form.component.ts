import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  onSubmit(event:any)
  {
    console.log(event)
  }
  counter = 99;
}
