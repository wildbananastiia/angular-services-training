import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'prefix'
  },
  {
    path: '**',
    component: AlbumsComponent
  },
  {
    path: 'albums',
    loadChildren: () => import('./pages/albums/albums.module').then(m => m.AlbumsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
