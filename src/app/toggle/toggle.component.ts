import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() name: any; // Specify the name of the input property and its type
  @Input() age:any;
  constructor() { }
  ngOnInit() {
  }
  
}
