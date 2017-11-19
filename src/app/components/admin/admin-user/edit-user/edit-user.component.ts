import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../../../models/';

import { UserService } from '../user.service';

import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: FormGroup;
  editUser: User;
  companies = [
    { value: 'rvc-consultores', viewValue: 'RV Consultores' },
    { value: 'lulemon', viewValue: 'Lulemon' },
    { value: 'retired', viewValue: 'Retired' },
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    const id = + this.activedRoute.snapshot.paramMap.get('id')
    this.editUser = this.userService.getUserById(id)
    this.user = this.fb.group({
      id: [this.editUser.id],
      name: [this.editUser.name, [Validators.required, Validators.minLength(2)]],
      username: [this.editUser.alias, [Validators.required, Validators.minLength(6)]],
      company: [this.editUser.company],
      active: [this.editUser.active],
      account: this.fb.group({
        email: [this.editUser.email, Validators.required],
        confirm: [this.editUser.email, Validators.required],
      })
    });
  }

  onSubmit() {
    this.userService.updateUserById(this.user.value['id'], this.user.value);
    this.userService.delTab('/admin/users/' + this.user.value['id']);
  }

}






































































































































