import { Injectable, inject } from '@angular/core';
import { Video, VideoFields } from './video.model';
import { isEqual, max, sampleSize } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PlaylistDbService {
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
    localStorage.setItem('current_video_num', '-1');
  }

  getNextVideo(){
    var current_video_num = localStorage.getItem('current_video_num');
    var next_video_num = 0;
    if (current_video_num){
      // should ALWAYS reach this line
      next_video_num = parseInt(current_video_num) + 1;
    }

    var playlist = this.getPlaylist();

    if (next_video_num >= playlist.length){ // loop
      next_video_num = 0
    }

    localStorage.setItem('current_video_num', next_video_num.toString());
    return playlist[next_video_num];
  }

  getPlaylistFields(): VideoFields[]{
    var retrievedPlaylist = localStorage.getItem('playlist');
    if (retrievedPlaylist){
        return JSON.parse(retrievedPlaylist).map((x: Object) =>
          x as VideoFields
        );
    } else {
      return []
    }
  }

  getPlaylist(): Video[]{
    var playlistFields = this.getPlaylistFields();
    return playlistFields.map((x: VideoFields) =>
      new Video(x)
      // have to call `new` for Book to init with its methods
    );
  }

  addVideoToPlaylist(video: Video){
    var video_fields = video.getFields();
    var playlist = this.getPlaylistFields();
    playlist.push(video_fields);
    localStorage.setItem('playlist', JSON.stringify(playlist));
  }

  setCurrentVideo(video: Video): Video {
    var playlist = this.getPlaylist();
    var index = playlist.findIndex((v) => v.video_id == video.video_id);
    localStorage.setItem('current_video_num', index.toString());
    return video;
  }
}