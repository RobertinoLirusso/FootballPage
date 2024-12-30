import { Component, OnInit } from '@angular/core';
import { Club } from '../../interfaces/club';
import { ClubService } from '../../services/club.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  
  clubs: Club[] = [];

  constructor(private clubService: ClubService) {}

  ngOnInit(): void {
      this.getClubs();
  }

  getClubs(): void {
    this.clubService.getClubs().subscribe({
      next: (data) => {
        this.clubs = data;
      },
      error: (err) => {
        console.error('Error fetching clubs:', err);
      }
    });
  }
}
