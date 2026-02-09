import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../../../core/services/supplier.service';
import { Supplier } from '../../../core/models/supplier.model';
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-add-supplier-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './add-supplier-modal.component.html',
  styleUrl: './add-supplier-modal.component.scss'
})
export class AddSupplierModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() supplierAdded = new EventEmitter<void>();

  supplierForm: FormGroup;

  constructor(private fb: FormBuilder, private supplierService: SupplierService) {
    this.supplierForm = this.fb.group({
      companyName: ['', Validators.required],
      contactEmail: ['', [Validators.email]], // Optional but must be valid email if present
      phoneNumber: ['', Validators.required],
      physicalAddress: [''],
      providedProductType: ['', Validators.required],
      totalAdvancesPaid: [0] 
    });
  }

  submit() {
    if (this.supplierForm.valid) {
      const newSupplier: Supplier = {
        ...this.supplierForm.value,
        bills: [] // Initialize with no bills
      };

      this.supplierService.createSupplier(newSupplier).subscribe({
        next: () => {
          this.supplierAdded.emit(); // Tell parent to refresh list
          this.close.emit(); // Close modal
        },
        error: (err) => console.error('Error creating supplier', err)
      });
    }
  }
}