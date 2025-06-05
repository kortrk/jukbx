import { Component, HostBinding, Input, inject } from '@angular/core';
import { Video } from '../video.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'search-result',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
  @Input() video: Video;

  @HostBinding('attr.class') cssClass = 'item'; // from Semantic UI

  constructor(){
    this.video = new Video({
      video_id: "5NGguk8VXYc",
      description: "Thank you, Legolas!",
      title: "Goodbye Orlando",
      channel: "Peter Jackson"
    });
  }
}
