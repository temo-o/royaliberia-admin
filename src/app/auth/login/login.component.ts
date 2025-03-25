import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginEndpoints } from 'src/environments/login-endpoints';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../auth-response';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  jwt: string = '';
  
  constructor(private fb: FormBuilder, private http: HttpClient, private jwtService: JwtService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[0-9]).*$/)]]
    });
  }

  login() {

    const postBody = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    const url = `${environment.apiBaseUrl}${loginEndpoints.login}`;
    let res = this.http.post<AuthResponse>(url, postBody).subscribe({
      next: (response) =>{
        this.jwtService.setToken(response.token);

        this.jwtService.storeToken();

        this.jwt = response.token;
        console.log(this.jwt);
      },
      error: (error) => {console.log(error)}
    });

    return res;
  }
}
