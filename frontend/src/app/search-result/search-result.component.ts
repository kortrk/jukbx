import { Component, HostBinding, Input, inject } from '@angular/core';
import { Video } from '../video.model';
import { RouterLink } from '@angular/router';
import { PlaylistDbService } from '../playlist-db.service';

@Component({
  selector: 'search-result',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
  @Input() video: Video;
  playlistDbService: PlaylistDbService;

  @HostBinding('attr.class') cssClass = 'item'; // from Semantic UI

  constructor(){
    this.playlistDbService = inject(PlaylistDbService);
    this.video = new Video({
      video_id: "5NGguk8VXYc",
      description: "Thank you, Legolas!",
      title: "Goodbye Orlando",
      channel: "Peter Jackson"
    });
  }

  addToPlaylist(){
    console.log(`adding video: ${this.video.video_id}`)
    this.playlistDbService.addVideoToPlaylist(this.video);
  }
}
