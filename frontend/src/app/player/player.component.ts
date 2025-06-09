import { Component, inject, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { PlaylistDbService } from '../playlist-db.service';

@Component({
  selector: 'player',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  playerConfig = {
    controls: 1,
    mute: 0,
    autoplay: 1 // autoplay isn't guaranteed due to mute
  }

  videoId = "UxHahSb1EE4";
  isStarting = true;
  @ViewChild('player') player: YouTubePlayer | undefined;

  playlistDbService: PlaylistDbService;

  constructor(){
    this.playlistDbService = inject(PlaylistDbService);
  }

  ngOnInit() {
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(scriptTag);
  }

  nextVideo(){
    var s = this.player?.getPlayerState()
    if (s == YT.PlayerState.ENDED || this.isStarting){
      var video = this.playlistDbService.getNextVideo();
      this.videoId = video.video_id;
      this.isStarting = false;
    }
  }

}
