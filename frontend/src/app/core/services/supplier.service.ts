import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier.model';
import { Bill } from '../models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  // Pointing to your Docker-exposed .NET API
  private apiUrl = 'http://localhost:5000/api/suppliers';

  constructor(private http: HttpClient) {}

  // Get all suppliers (includes their bills and debt totals)
  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.apiUrl);
  }

  // Get a specific supplier with full details
  getSupplierById(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.apiUrl}/${id}`);
  }

  // Add a new supplier
  createSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.apiUrl, supplier);
  }

  // FEATURE: Link a new bill to a supplier
  addBillToSupplier(supplierId: number, bill: Bill): Observable<Bill> {
    return this.http.post<Bill>(`${this.apiUrl}/${supplierId}/bills`, bill);
  }
}