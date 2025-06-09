import { Component, inject } from '@angular/core';
import { Video } from '../video.model';
import { PlaylistDisplayRowComponent as PlRow } from '../playlist-display-row/playlist-display-row.component';
import { PlaylistDbService } from '../playlist-db.service';
import { of, switchMap, timer } from 'rxjs';

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

  constructor(){
    this.playlistDbService = inject(PlaylistDbService);
    this.playlist = [];
  
    // poll every 5 seconds
    timer(0, 1000).pipe(
      switchMap(() => of(this.playlistDbService.getPlaylist()))
    ).subscribe((res) => {
      this.playlist = res
    });
  }
}