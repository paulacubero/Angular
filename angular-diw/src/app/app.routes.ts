import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpezialComponent } from './components/spezial/spezial.component';
import { SambaComponent } from './components/samba/samba.component';
import { ConverseComponent } from './components/converse/converse.component';
import { NewBalanceComponent } from './components/new-balance/new-balance.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'spezial', component: SpezialComponent },
  { path: 'samba', component: SambaComponent },
  { path: 'converse', component: ConverseComponent },
  { path: 'new-balance', component: NewBalanceComponent },
];
