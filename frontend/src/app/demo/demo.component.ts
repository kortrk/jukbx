import { Component, ViewChild } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'demo',
  standalone: true,
  imports: [PlayerComponent, SearchComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
}
