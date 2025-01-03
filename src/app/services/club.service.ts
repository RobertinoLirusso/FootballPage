import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../interfaces/club';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  getClubs(): Observable<Club[]> {
    const headers = new HttpHeaders({
      'Cache-Control': 'no-store',
    });
    return this.http.get<Club[]>(this.apiUrl, { headers });
  }

  getClubById(id: number): Observable<Club> {
    return this.http.get<Club>(`${this.apiUrl}/${id}`);
  }

  createClub(club: Partial<Club>): Observable<Club> {
    return this.http.post<Club>(`${this.apiUrl}/create`, club);
  }

  editClub(id: number, club: Partial<Club>): Observable<Club> {
    return this.http.put<Club>(`${this.apiUrl}/edit/${id}`, club);
  }

  deleteClub(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

}
