import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsItem } from '../../models/news-item';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: NewsItem[] = [];
  selectedNews!: NewsItem;

  constructor(private newsService: NewsService) { }

   ngOnInit(): void {
     this.fetchNews();
   this.showDetails(0);
  }

  fetchNews() {
    this.newsService.getNews().subscribe(
      (data) => {
        this.newsList = data;
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }

  showDetails(id: number) {
    this.newsService.getNewsById(id).subscribe(
      (data) => {
        this.selectedNews = data;
      },
      (error) => {
        console.error('Error fetching detailed news:', error);
      }
    );
  }
}
