import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
  ) {
    this.user = new User();
    this.userForm = this.generateForm(this.user);
  }

  ngOnInit() {

  }

  private generateForm(user: User): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      company: '',
      active: false,
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required],
      })
    });
  }

}
