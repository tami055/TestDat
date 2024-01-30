import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsItem } from '../models/news-item';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    private apiUrl = 'http://localhost:5066/api/News'; // URL to web api

    constructor(private http: HttpClient) {}

    getNews(): Observable<NewsItem[]> {
        return this.http.get<NewsItem[]>(this.apiUrl);
    }

    getNewsById(id: number): Observable<NewsItem> {
      return this.http.get<NewsItem>(`${this.apiUrl}/${id}`);
  }
}
