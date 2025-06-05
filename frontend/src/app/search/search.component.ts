import { Component, inject } from '@angular/core';
import { Video } from '../video.model';
import { SearchResultComponent } from '../search-result/search-result.component';
import { FormsModule, NgModel } from '@angular/forms';
import { VideoSearchService } from '../video-search.service';

@Component({
  selector: 'search',
  standalone: true,
  imports: [SearchResultComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  videoSearchService: VideoSearchService;
  videos: Video[] = [];
  titleSearch: string;

  constructor(){
    this.videoSearchService = inject(VideoSearchService);
    this.titleSearch = "";
    this.videos = [];
  }

  search(){
    this.videos = this.videoSearchService.search(this.titleSearch);
    console.log(`searching for ${this.titleSearch}`);
    console.log(`got these videos: ${this.videos}`)
  }

  clearSearch(){
    this.titleSearch = "";
    this.videos = [];
  }
}