import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'danger' | 'success' | 'outline' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Output() onClick = new EventEmitter<MouseEvent>();

  handleClick(event: MouseEvent) {
    this.onClick.emit(event);
  }
}
