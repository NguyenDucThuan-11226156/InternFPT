// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-parent',
//   template: `

//     <input placeholder="Name" [(ngModel)]="name">
//     <br>
//     <input placeholder="Age" [(ngModel)]="age">
//     <br>
//     <button (click)="updateUser()">Save</button>
//     <div *ngFor="let u of list">
//       <app-child [name]="u.name" [age]="u.age" (myclick)="removePerson($event)"> </app-child>
//     </div>
//     <h3>Ban vua nhap ten: {{name}}</h3>
//     <h3>Ban vua nhap tuổi {{age}}</h3>
//     <h1>Nhiet do ở {{place}} : {{temp}}</h1>
//     <input placeholder="Nhap khu vực" [(ngModel)]="place" (keypress)="takeApi()">


//   `,
// })
// export class ParentComponent {
//   place ='';
//   temp = 0;
//   name = "";
//   age = "";
//   list: {
//     id: number;
//     name: string;
//     age: any;
//   }[] = [
//     {
//       id: 1,
//       name: 'Thuan',
//       age: 1,
//     },
//     {
//       id: 2,
//       name: 'Hoang',
//       age: 3,
//     },
//     {
//       id: 3,
//       name: 'Thanh',
//       age: 1,
//     }
//   ];

//   removePerson(name: string) {
//     const index = this.list.findIndex(user => user.name === name);
//     this.list.splice(index, 1);
//   }

//   updateUser() {
//     this.list.unshift({
//       id: this.list.length + 1,
//       name: this.name,
//       age: this.age,
//     });
//   }
//   async takeApi()
//   {
      
//   }

// }
