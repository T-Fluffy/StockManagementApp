import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Supplier } from '../../../core/models/supplier.model';
import { SupplierService } from '../../../core/services/supplier.service';
import { AddSupplierModalComponent } from '../add-supplier-modal/add-supplier-modal.component'; 
import { AddBillModalComponent } from "../add-bill-modal/add-bill-modal.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [CommonModule, AddBillModalComponent, AddSupplierModalComponent, ButtonComponent], 
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.scss'
})
export class SuppliersListComponent implements OnInit {
  suppliers: Supplier[] = [];
  selectedSupplier: Supplier | null = null;
  
  isCreateModalOpen = false; 

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

 
  openCreateSupplier() {
    this.isCreateModalOpen = true; 
  }

  
  onSupplierAdded() {
    this.isCreateModalOpen = false; // Close the modal
    this.loadSuppliers(); // Refresh the list to show the new supplier
  }

  openAddBill(supplier: Supplier) {
    this.selectedSupplier = supplier;
  }

  onBillAdded() {
    this.loadSuppliers();
    this.selectedSupplier = null;
  }
}