import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../../../models/';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  companies = ['Company 1', 'Company 2'];

  constructor(
    private fb: FormBuilder,
  ) {
    this.user = new User();
    this.userForm = this.generateForm(this.user);
  }

  ngOnInit() {

  }

  onSubmit() {
    this.user = this.prepareSaveUser();
  }

  private generateForm(user: User): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      company: '',
      active: false,
      account: this.fb.group({
        email: ['', [Validators.required, Validators
          .pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      })
    });
  }

  private prepareSaveUser(): User {
    const formModel = this.userForm.value;
    const address = formModel.account.email;
    const saveUser: User = {
      id: 0,
      name: formModel.name as string,
      active: formModel.active,
      alias: formModel.username as string,
      company: formModel.company as string,
      email: address as string
    };

    return saveUser;
  }

}
