import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {}

  public login(form: NgForm): void {
    this.loginService.onlogin(form.value).subscribe({
      next: (v) => {
        console.log('login succesfully, ', v);
        this.cookie.set('token', v.token);
      },
      error: (e) => {
        console.log('login error, ', e);
      },
    });
  }
}
