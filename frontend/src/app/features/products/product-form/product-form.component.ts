import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  product = { name: '', purchasePrice: 0, sellingPrice: 0, miniStock: 0, maxStock: 0 };
  
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();

  close() { this.onClose.emit(); }
  submit() { this.onSave.emit(this.product); }
}
