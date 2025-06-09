import { Component, ViewChild } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { SearchComponent } from '../search/search.component';
import { PlaylistDisplayComponent } from '../playlist-display/playlist-display.component';

@Component({
  selector: 'demo',
  standalone: true,
  imports: [PlayerComponent, SearchComponent, PlaylistDisplayComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
}
