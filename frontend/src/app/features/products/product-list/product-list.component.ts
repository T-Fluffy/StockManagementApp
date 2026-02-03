import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { CardComponent } from "../../../shared/components/card/card.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductFormComponent, ButtonComponent, CardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: `./product-list.component.scss`
})
export class ProductListComponent {
  isModalOpen = false;

  // Mock data for testing the UI
  products = [
    { name: 'Chicha Luxe', category: 'Equipment', currentStock: 25, miniStock: 5, maxStock: 30, purchasePrice: 80, sellingPrice: 120 },
    { name: 'Boisson Énergisante', category: 'Consumables', currentStock: 5, miniStock: 10, maxStock: 50, purchasePrice: 2.5, sellingPrice: 5.0 }
  ];

  handleSave(newProduct: any) {
    console.log('Data received from modal:', newProduct);
    
    // For now, let's just push it to the list locally so you see it work!
    this.products.push({
      ...newProduct,
      currentStock: 0 // New products start at 0 until we do "Entrée Stock"
    });

    this.isModalOpen = false; // Close the modal
  }

  manageProduct(product: any) {
  console.log('Managing product:', product);
  // Future logic: this.selectedProduct = product; this.isModalOpen = true;
  }
}