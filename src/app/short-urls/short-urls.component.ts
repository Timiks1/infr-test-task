import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-short-urls',
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule
  ],
  templateUrl: './short-urls.component.html',
  styleUrl: './short-urls.component.css'
})
export class ShortUrlsComponent {
  urls = [
    { originalUrl: 'https://example.com', shortCode: 'abc123' }
  ];
  displayedColumns: string[] = ['originalUrl', 'shortCode'];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadUrls();
  }

  loadUrls() {
    this.http.get('https://localhost:7124/api/Url')
      .subscribe((data: any) => this.urls = data);
  }
}
