import { Injectable } from '@angular/core';
import { Video } from './video.model';
import * as data from '../../public/assets/elvis.json'

@Injectable({
  providedIn: 'root'
})
export class VideoSearchService {
  items = data['items'];
  all_videos: Video[] = [];
  videos: Video[] = [];

  constructor(){
    this.all_videos = this.items.map((x: any) =>
      new Video({
        title: x['snippet']['title'],
        description: x['snippet']['description'],
        channel: x['snippet']['channelTitle'],
        video_id: x['id']['videoId']
      })
      // have to call `new` for Book to init with its methods
    );
  }

  search(search_term: string){
    var videos = [...this.all_videos]; // clone
    return videos.filter((v: Video) => 
      v.title.toLowerCase().includes(search_term.toLowerCase())
    ).slice(0, 5)
  }
}