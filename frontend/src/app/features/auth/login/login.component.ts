import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        // res.token is automatically saved to localStorage by our AuthService tap()
        console.log('Login success!', res);
        this.router.navigate(['/suppliers']); // Redirect to your list
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Invalid email or password');
      }
    });
  }
}