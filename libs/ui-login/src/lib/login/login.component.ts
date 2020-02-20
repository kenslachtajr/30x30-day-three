import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from  '@angular/forms';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    if (this.form.invalid) return;
    this.router.navigate(['./fruits']);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }
}
