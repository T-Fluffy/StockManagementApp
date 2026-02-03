import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../Components/stat-card/stat-card.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { TopSalesComponent } from '../Components/top-sales/top-sales.component';
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatCardComponent, CardComponent, TopSalesComponent, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl:'./dashboard.component.scss'
})
export class DashboardComponent {
  topSalesData = [
    { name: 'Chicha Pomme', percentage: 85 },
    { name: 'Thé Menthe', percentage: 60 },
    { name: 'Café Direct', percentage: 45 }
  ];

  alerts = [
    { type: 'warn', message: 'Stock Sécurité atteint : Charbon 10kg' },
    { type: 'danger', message: 'Expiration proche : Jus d\'orange' }
  ];
  handleDismiss(index: number) {
    this.alerts.splice(index, 1);
  }
}