import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {

  loginForm: FormGroup;
  user1:any;
  pass1:any;
  custlogin:any;

  constructor(private formBuilder: FormBuilder, private router : Router , private http: HttpClient) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.user1=this.loginForm.get('username')?.value;
    this.pass1=this.loginForm.get('password')?.value;
    console.log(this.user1,this.pass1)
    this.http.post("http://localhost:3030/custlogin", {
    id: this.user1,
    pwd: this.pass1
    }).subscribe(resp=>{
    console.log(resp);
    this.custlogin = resp;
    
    if(this.custlogin == 'Success'){
      this.router.navigateByUrl('/home'); 
    }else{
    alert("Incorrect credentials");
    }
    })
    }

  ngOnInit(): void {
  }

  // loginForm: FormGroup = this.fb.group({
  //   userid: ['', [Validators.required, Validators.minLength(2)]],
  //   password: ['', [Validators.required, Validators.minLength(6)]],
  // });

  // onLogin() {
  //   if (!this.loginForm.valid) {
  //     return;
  //   }
  //   if (
  //     this.loginForm.value.userid == 'yuk' &&
  //     this.loginForm.value.password == 'Space123'
  //   ) {
  //     window.location.href = '/home';
  //   } else {
  //     alert('Enter valid credentials');
  //   }
  // }
}
