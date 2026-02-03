import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-sales.component.html',
  styleUrl: './top-sales.component.scss'
})
export class TopSalesComponent {
  @Input() data: any[] = [];
}
