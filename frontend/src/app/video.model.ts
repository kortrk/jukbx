export interface VideoFields {
  title: string;
  channel: string;
  description: string;
  video_id: string;
}

export class Video {
    title: string;
    channel: string;
    description: string;
    video_id: string;

    // for display:
    highlighted = false;
    row_color = "blue";

	constructor(videoFields: VideoFields) {
    this.title = videoFields.title;
    this.channel = videoFields.channel;
    this.description = videoFields.description;
    this.video_id = videoFields.video_id;
  }

  link(): string {
    return `https://www.youtube.com/watch?v=${this.video_id}`
  }

  image_link(): string {
    return `https://i.ytimg.com/vi/${this.video_id}/mqdefault.jpg`
  }

  getFields(): VideoFields {
    return {
      title: this.title,
      channel: this.channel,
      description: this.description,
      video_id: this.video_id
    }
  }
}
