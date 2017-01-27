import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../../shared/interfaces/user.interface';

import { UserService } from '../user.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: FormGroup;
  companies = [
    { value: 'rvc-consultores', viewValue: 'RV Consultores' },
    { value: 'lulemon', viewValue: 'Lulemon' },
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      company: [''],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required],
      })
    });
  }

  onSubmit() {
    console.log(this.user.value, this.user.valid);
  }

}






































































































































