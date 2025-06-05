import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
  {path: '', component: DemoComponent},
  {path: 'about', component: DemoComponent},
  {path: '**', component: DemoComponent}
];
