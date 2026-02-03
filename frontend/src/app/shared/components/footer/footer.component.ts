import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { APP_CONFIG } from '../../../app.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  devName = APP_CONFIG.developerName; // Use the variable
  version = APP_CONFIG.version;
}
