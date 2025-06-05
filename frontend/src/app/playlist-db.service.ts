import { Injectable, inject } from '@angular/core';
import { Video, VideoFields } from './video.model';
import { isEqual, max, sampleSize } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PlaylistDbService {
  current_video_num = -1
  video_count = 0

  constructor(){
    var initial_videos: VideoFields[] = [
      {
        title: 'Elvis Presley - In the Garden (Official Audio)',
        description: 'Official Audio for In the Garden by Elvis Presley',
        channel: 'ElvisPresleyVEVO',
        video_id: 'DgbkGQeLDXI'
      },
      {
        title: 'Elvis Presley - How Great Thou Art (Live at Hampton Roads Coliseum - Official Lyric Video)',
        description: 'Recorded in Hampton, Virginia. Elvis performed at the Coliseum on 5 different occasions.',
        channel: 'ElvisPresleyVEVO',
        video_id: '5EeACZ0fPeI'
      }
    ]
    localStorage.setItem('playlist', JSON.stringify(initial_videos));
    this.video_count = 2
  }

  getNextVideo(){
    var next_video_num = this.current_video_num + 1;
    console.log(`next_video_num = ${next_video_num}, current_video_num = ${this.current_video_num}`)
    if (next_video_num > this.video_count){
      next_video_num = 0
    }
    console.log(next_video_num)
    var playlist = this.getPlaylist();
    console.log(playlist)
    this.current_video_num = next_video_num;
    return playlist[next_video_num];
  }

  getPlaylist(): Video[]{
    var retrievedPlaylist = localStorage.getItem('playlist');
    if (retrievedPlaylist){
        return JSON.parse(retrievedPlaylist).map((x: Object) =>
          new Video(x as VideoFields)
          // have to call `new` for Book to init with its methods
        );
    } else {
      return []
    }
  }
}