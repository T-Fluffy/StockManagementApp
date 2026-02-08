import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../../../core/services/supplier.service';

@Component({
  selector: 'app-add-bill-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-bill-modal.component.html',
  styleUrl: './add-bill-modal.component.scss'
})
export class AddBillModalComponent {
  @Input() supplierId!: number;
  @Input() supplierName!: string;
  @Output() close = new EventEmitter<void>();
  @Output() billAdded = new EventEmitter<any>();

  billForm: FormGroup;

  constructor(private fb: FormBuilder, private supplierService: SupplierService) {
    this.billForm = this.fb.group({
      billNumber: ['', Validators.required],
      issueDate: [new Date().toISOString().split('T')[0], Validators.required],
      dueDate: ['', Validators.required],
      totalAmount: [0, [Validators.required, Validators.min(1)]],
      amountPaid: [0, [Validators.required, Validators.min(0)]]
    });
  }

  submit() {
    if (this.billForm.valid) {
      this.supplierService.addBillToSupplier(this.supplierId, this.billForm.value).subscribe({
        next: (res) => {
          this.billAdded.emit(res);
        },
        error: (err) => console.error('Error adding bill', err)
      });
    }
  }
}