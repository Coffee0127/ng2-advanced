import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormGroup, FormBuilder } from '@angular/forms';

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
      'm1': ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      'group1': this.fb.array([
        this.fb.control('Xuan 1', Validators.required),
        this.fb.control('Xuan 2', Validators.required),
        this.fb.control('Xuan 3', Validators.required),
        this.fb.control('Xuan 4', Validators.required),
      ])
    });
  }

  ngOnInit() {
    this.form.addControl('email', this.fb.control('default@example.com', Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)));

    let group1: FormArray = <FormArray> this.form.controls['group1'];
    group1.insert(group1.length, this.fb.control('Xuan 5'));
  }

  getFieldInvalid(fieldName) {
    let field = this.form.controls[fieldName];
    return field.dirty && field.invalid;
  }

  addRow() {
    let group1: FormArray = <FormArray> this.form.controls['group1'];
    group1.insert(group1.length, this.fb.control('Xuan ' + (group1.length + 1)));
  }
}
