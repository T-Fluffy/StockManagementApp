import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Supplier } from '../../../core/models/supplier.model';
import { SupplierService } from '../../../core/services/supplier.service';
import { AddBillModalComponent } from "../add-bill-modal/add-bill-modal.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [CommonModule, AddBillModalComponent, ButtonComponent],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.scss'
})
export class SuppliersListComponent implements OnInit {
  suppliers: Supplier[] = [];
  selectedSupplier: Supplier | null = null;

  constructor(private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe({
      next: (data) => this.suppliers = data,
      error: (err) => console.error('Error loading suppliers', err)
    });
  }

  openAddBill(supplier: Supplier) {
    console.log('Opening Modal for:', supplier.companyName);
    this.selectedSupplier = supplier;
  }

  onBillAdded() {
    this.loadSuppliers(); // Refresh table data
    this.selectedSupplier = null; // Close modal
  }

  openCreateSupplier() {
    alert("Prochaine étape : Création du fournisseur !");
  }
}