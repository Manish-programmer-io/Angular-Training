import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { timeInterval, TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { interval, map } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DatePipe, AsyncPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  template:`<!--<h2>{{title}}</h2>-->
  <!-- <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#location">Location</a>
  <a href="#contact">Contact</a>
  </div>
<h2>Welcome {{name}}!</h2>
<h2>{{2+2}}</h2>
<h2>{{greetUser()}}</h2>
<img src="assets/img/programmers-io.jpg" title="" alt="" height="50px" width="230px"><br>
<input type="text" [disabled] = "false" placeholder="Enter your name" value="name">
<h2 [class]="textCols">Class Binding</h2>
<h2 [style.color] = "hasError ? 'red' : 'green'">Style Binding</h2>
<button (click) = "onClick($event)" class="btn">Greet</button><br>
<div style="margin-top: 10px;">{{greeting}}</div>
<div>
  <input #myInput type="text" placeholder="enter your name">
  <button (click)="logMessage(myInput.value)">Log In</button>
</div>

<div>
    <button *ngIf="isButtonVisible" class="ngdir">This is ngIf Directives</button>
  </div>
  <div>
    <button (click)="showDiv1()" class="shbtn">Show</button>
    <button (click)="hideDiv1()" class="shbtn">Hide</button>
  </div>

  <div style="margin-top: 20px;">
    <select>
      <option *ngFor="let city of isArray">{{city}}</option>
    </select>
  </div>

 <div>
  <table class="table">
    <thead>
      <tr>
        <td>Employee ID</td>
        <td>Employee Name</td>
        <td>Employee Location</td>
        <td>Employrr Department</td>
        <td>Employee Salary</td>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let empdtl of isEmployee; let sr = index">
        <td >{{empdtl.empId}}</td>
        <td>{{empdtl.empName}}</td>
        <td>{{empdtl.empLocation}}</td>
        <td>{{empdtl.empDept}}</td>
        <td>{{empdtl.empSal}}</td>
      </tr>
    </tbody>
  </table>
 </div> -->

`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  public name = "Programmers.io";
  public textCols = "text-success";
  public hasError = true;
  public greeting = "";
  public Greeting = "";
  public show = "";
  dspName = false;
  isButtonVisible: boolean = true;
  isDate: Date = new Date();

  studentObj: any = {
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  }

  formValue: any;

  onSubmit(){
    debugger;
    this.formValue = this.studentObj;
  }

  resetForm(){
    this.studentObj={
      email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    }
  }

  isForm: FormGroup = new FormGroup({
      firstName: new FormControl([Validators.required, Validators.minLength(4)]),
      lastName: new FormControl([Validators.required, Validators.minLength(4)]),
      userName: new FormControl("example@gmail.com",[Validators.required,Validators.email]),
      city: new FormControl(),
      isRememberMe: new FormControl()
  });

  isFormValue: any;

  onSave(){
    debugger;
    this.isFormValue = this.isForm.value;
  }
 

  isArray: string[] = ['Select City','Lucknow','Noida','Jaipur','Pune','Maharashtra','Hydrabad','Goa'];

  isEmployee: any[] = [
    {empId:1, empName:'Manish Soni',empLocation:'Lucknow',empDept:'UI',empSal:35000},
    {empId:2, empName:'Vivek Panwar',empLocation:'Udaipur',empDept:'IBMi',empSal:32000},
    {empId:3, empName:'Manoj Rawat',empLocation:'Jaipur',empDept:'EDI',empSal:30000},
    {empId:4, empName:'Atharv Parashar',empLocation:'Kanpur',empDept:'Cobol',empSal:35000},
    {empId:5, empName:'Rituraj',empLocation:'Sikar',empDept:'IBMi',empSal:33000}
  ];

  div1Color: string = 'bg-white'
  div2Color: string = 'text-dark'

 onClick(event:any){
  console.log(event);
  this.greeting = 'Welcome to Angular';
 }

 logMessage(value:any){
    console.log(value);
 }

 showDiv1(){
  this.isButtonVisible=true;
 }

 addWhiteClass(){
  this.div1Color = "bg-white"
  this.div2Color = "text-dark"
 }

 addBlackClass(){
  this.div1Color = "bg-dark"
  this.div2Color = "text-white"
 }

 hideDiv1(){
  this.isButtonVisible=false;
 }

  constructor(){}
  greetUser(){
    return "Hello " + this.name;
  }
  title = 'Welcome To Programmers.io';
  
}



