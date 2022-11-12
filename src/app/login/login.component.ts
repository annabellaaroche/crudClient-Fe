import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    private authService: AuthService, private storageService: TokenStorageService
  ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      window.location.replace("/client")
    }
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required] ),
      password: new FormControl('',[Validators.required] )
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }
    let user: User = this.form.value;
    this.authService.login(user).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.storageService.saveToken(this.storageService.getUser().access_token)
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  reloadPage(): void {
    window.location.replace("/cilindro")
  }
}
