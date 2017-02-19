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
  }

  getFieldInvalid(fieldName) {
    let field = this.form.controls[fieldName];
    return field.dirty && field.invalid;
  }
}
