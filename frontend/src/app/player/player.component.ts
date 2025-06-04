import { Component, NgZone, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

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

  videoId = "JImcvtJzIK8";
  videoId2 = "uE-1RPDqJAY";
  @ViewChild('player') player: YouTubePlayer | undefined;

  ngOnInit() {
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(scriptTag);
  }

  nextVideo(){
    console.log("got a state change!")
    if (this.player && this.player.getPlayerState() == YT.PlayerState.ENDED){
      this.videoId = this.videoId2;
    }
  }

}
