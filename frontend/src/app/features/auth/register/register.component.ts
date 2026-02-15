import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router'; // Added RouterModule
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ButtonComponent, 
    RouterModule // Added for routerLink
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'] // Link the scss
})
export class RegisterComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'Admin'
  };

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.user).subscribe({
      next: (res) => {
        alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed', err);
        // Better error handling for ASP.NET Identity errors
        const errorMsg = err.error?.[0]?.description || 'Erreur lors de l\'inscription';
        alert(errorMsg);
      }
    });
  }
}