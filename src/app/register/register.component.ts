import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
isSucessful = false;
isSignUpFailed = false;
errorMessage='';
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required] ),
      email: new FormControl('',[Validators.required] ),
      password: new FormControl('',[Validators.required] ),
      password_confirmation: new FormControl('',[Validators.required] )
    });
  }

  onSubmit(){
    if (!this.form.valid) {
      return;
    }
    let user: User = this.form.value;
    this.authService.register(user).subscribe((res:any) => {
         this.router.navigateByUrl('/login');
    })
  }
}
