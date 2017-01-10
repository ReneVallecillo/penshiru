import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth.service';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
      .subscribe(
      data => { this.router.navigate(['/']); },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
