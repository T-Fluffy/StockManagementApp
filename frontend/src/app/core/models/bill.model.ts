export interface Bill {
  id?: number;
  billNumber: string;
  issueDate: Date | string;
  dueDate: Date | string;
  totalAmount: number;
  amountPaid: number;
  remainingBalance?: number; // Calculated on backend or via logic
  isPaid?: boolean;
  supplierId: number;
}