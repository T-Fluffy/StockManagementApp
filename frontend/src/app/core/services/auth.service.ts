import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/account';
  
  // This allows components to "listen" for login/logout changes
  private authStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response.isSuccess && response.token) {
          localStorage.setItem('token', response.token);
          this.authStatus.next(true); // Notify that user is logged in
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.authStatus.next(false); // Notify that user is logged out
  }

  getToken() {
    return localStorage.getItem('token');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  // Expose the status as an observable for the Header
  get isLoggedIn$() {
    return this.authStatus.asObservable();
  }

  getUserDisplayName(): string {
    const token = this.getToken();
    if (!token) return 'Utilisateur';

    try {
      const decoded: any = jwtDecode(token);
      // Identity puts the name in this specific URI key
      return decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] || 'Utilisateur';
    } catch (e) {
      return 'Utilisateur';
    }
  }
}