import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dummylogin',
  templateUrl: './dummylogin.component.html',
  styleUrls: ['./dummylogin.component.css']
})
export class DummyloginComponent implements OnInit  {
  hide: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  loginForm: FormGroup = this.fb.group({
    userid: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    if (
      this.loginForm.value.userid == 'yuk' &&
      this.loginForm.value.password == 'Space123'
    ) {
      window.location.href = '/home';
    } else {
      alert('Enter valid credentials');
    }
  }
}
