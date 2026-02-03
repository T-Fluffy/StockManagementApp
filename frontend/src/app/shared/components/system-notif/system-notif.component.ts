import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-system-notif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system-notif.component.html',
  styleUrl: './system-notif.component.scss'
})
export class SystemNotifComponent {
  @Input() count: number = 0;
}
