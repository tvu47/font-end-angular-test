import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  public login(form: NgForm): void {
    this.loginService.onlogin(form.value).subscribe({
      next: (v) => {
        console.log('login succesfully');
      },
      error: () => {
        console.log('login error');
      },
    });
  }
}
