import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-url-info',
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './url-info.component.html',
  styleUrl: './url-info.component.css'
})
export class UrlInfoComponent {
  url: any = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://localhost:7124/api/Url/${id}`)
      .subscribe((data: any) => this.url = data);
  }
}
