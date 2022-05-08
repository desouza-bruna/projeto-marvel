import { ComicsComponent } from './pages/comics/comics.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
  },
  {
    path: 'quadrinhos',
    component: ComicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
