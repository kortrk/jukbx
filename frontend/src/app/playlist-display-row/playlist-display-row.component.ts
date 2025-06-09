import { Component, HostBinding, Input, inject } from '@angular/core';
import { Video } from '../video.model';
import { RouterLink } from '@angular/router';
import { PlaylistDbService } from '../playlist-db.service';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'playlist-display-row',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './playlist-display-row.component.html',
  styleUrl: './playlist-display-row.component.css'
})
export class PlaylistDisplayRowComponent {
  @Input() video: Video;
  @Input() player: PlayerComponent | undefined;
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

  playVideo(){
    var video = this.playlistDbService.setCurrentVideo(this.video); 
    if (video && this.player){
      this.player.videoId = video.video_id;
    }
  }
}
