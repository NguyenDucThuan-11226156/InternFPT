import { Component, Input } from '@angular/core';
import { Album } from '../app.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  name = ''; // Initialize the name variable
  isToggle = false;
  constructor() { }
  isHighlight= true;
  oddStyle = { color : 'pink' , fontsize :'30px'};
  evenStyle = { color : 'black' , fontsize :'60px'};
  changeShape(){
    this.isHighlight = !this.isHighlight;
  }
  newEn='';
  newVn ='';
  listDictionary=[{
    id:1 ,
    En:'action', 
    Vn:'Hanh dong', 
    memorized: true,
  }];


  create() {
    this.listDictionary.unshift({
      id: this.listDictionary.length + 1,
      En: this.newEn,
      Vn: this.newVn,
      memorized: this.newEn.length>5?true:false,

    });
    this.isToggle = true;
  }
  delete(id:number)
  {
     const index =this.listDictionary.findIndex(word =>{
      word.id = id;
    })
    this.listDictionary.splice(index,1);
  }
  filterstatus = '';
  
  
  }
