import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('https://localhost:7124/api/Auth/login', this.credentials)
      .subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        alert('Login successful');
      }, error => {
        alert('Login failed');
      });
  }
}
