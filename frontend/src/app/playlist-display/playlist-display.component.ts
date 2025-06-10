import { Component, inject, Input } from '@angular/core';
import { Video } from '../video.model';
import { PlaylistDisplayRowComponent as PlRow } from '../playlist-display-row/playlist-display-row.component';
import { PlaylistDbService } from '../playlist-db.service';
import { of, switchMap, timer } from 'rxjs';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'playlist-display',
  standalone: true,
  imports: [PlRow],
  templateUrl: './playlist-display.component.html',
  styleUrl: './playlist-display.component.css'
})
export class PlaylistDisplayComponent {
  playlistDbService: PlaylistDbService;
  playlist: Video[];
  @Input() player: PlayerComponent | undefined;

  constructor(){
    this.playlistDbService = inject(PlaylistDbService);
    this.playlist = [];
  
    // poll every 5 seconds
    timer(0, 1000).pipe(
      switchMap(() => of(this.playlistDbService.getPlaylist()))
    ).subscribe((res) => {
      this.playlist = this.prepDisplay(res);
    });
  }

  prepDisplay(videos: Video[]): Video[]{
    var vn = localStorage.getItem('current_video_num');
    var current_video_num = 0
    if (vn){
      current_video_num = parseInt(vn);
    }
    var colors = ["white"]
    var current_color = 0
    return videos.map((v, index) => {
      current_color = (current_color + 1) % colors.length;
      v.row_color = colors[current_color];
      v.highlighted = (index == current_video_num);
      return v;
    })
  }
}