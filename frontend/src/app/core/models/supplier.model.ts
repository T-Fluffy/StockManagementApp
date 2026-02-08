import { Bill } from './bill.model';

export interface Supplier {
  id?: number;
  companyName: string;
  contactEmail: string;
  phoneNumber: string;
  physicalAddress: string;
  providedProductType: string;
  totalAdvancesPaid: number;
  totalRemainingDebt?: number; // Calculated field from backend
  bills: Bill[];
}