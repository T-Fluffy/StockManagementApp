import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SystemNotifComponent } from '../system-notif/system-notif.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive,SystemNotifComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentDate = new Date();
  userName = "Admin Stock";
  unreadCount = 3; // Example: we can pass this to the bell
}
