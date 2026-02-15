import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { SystemNotifComponent } from "../system-notif/system-notif.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, SystemNotifComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = 'Utilisateur'; // You can later decode this from the JWT token
  unreadCount: number = 5;
  currentDate: Date = new Date();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  this.authService.isLoggedIn$.subscribe(isLoggedIn => {
    if (isLoggedIn) {
      this.userName = this.authService.getUserDisplayName();
    }
  });
}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.authService.getToken();
  }
}