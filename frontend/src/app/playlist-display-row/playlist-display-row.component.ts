import { Component, HostBinding, Input, inject } from '@angular/core';
import { Video } from '../video.model';
import { RouterLink } from '@angular/router';
import { PlaylistDbService } from '../playlist-db.service';

@Component({
  selector: 'playlist-display-row',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './playlist-display-row.component.html',
  styleUrl: './playlist-display-row.component.css'
})
export class PlaylistDisplayRowComponent {
  @Input() video: Video;
  playlistDbService: PlaylistDbService;

  @HostBinding('attr.class') cssClass = 'item'; // from Semantic UI

  constructor(){
    this.playlistDbService = inject(PlaylistDbService);
    this.video = new Video({
      video_id: "ID",
      description: "Description",
      title: "Title",
      channel: "Channel"
    });
  }

  playSong(){
    
  }
}
