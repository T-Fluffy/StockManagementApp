import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router'; // Added RouterModule
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ButtonComponent, 
    RouterModule // Critical: This makes routerLink work!
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Ensure this is .scss
})
export class LoginComponent {
  showPassword = false;
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        console.log('Login success!', res);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Email ou mot de passe invalide');
      }
    });
  }
}