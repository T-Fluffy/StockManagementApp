import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-panel.component.html',
  styleUrl: './notification-panel.component.scss'
})
export class NotificationPanelComponent {
  @Input() notifications: any[] = [];
  @Output() onDismiss = new EventEmitter<number>();

  getIcon(type: string) {
    const icons: any = { warn: '⚠️', danger: '🚨', info: 'ℹ️', success: '✅' };
    return icons[type] || '🔔';
  }

  dismiss(index: number) {
    this.onDismiss.emit(index);
  }
}
