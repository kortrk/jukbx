import { Routes } from '@angular/router';

import { PlayerComponent } from './player/player.component';

export const routes: Routes = [
  {path: '', component: PlayerComponent},
  {path: 'about', component: PlayerComponent},
  {path: '**', component: PlayerComponent}
];
