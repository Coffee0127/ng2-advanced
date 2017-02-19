import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'name': ['Xuan', Validators.required],
      'm1': ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]]
    });
  }

  ngOnInit() {
    this.form.addControl('email', this.fb.control('default@example.com', Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)));
  }

  getFieldInvalid(fieldName) {
    let field = this.form.controls[fieldName];
    return field.dirty && field.invalid;
  }
}
