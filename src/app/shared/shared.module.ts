import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { MatCardModule } from '@angular/material/card';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { SerieCardComponent } from './components/serie-card/serie-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CharacterCardComponent,
    ProgressBarComponent,
    ComicCardComponent,
    SerieCardComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CharacterCardComponent,
    ProgressBarComponent,
    FlexLayoutModule,
    ComicCardComponent,
    SerieCardComponent,
    SearchBarComponent,
    MatButtonModule,
  ],
})
export class SharedModule {}
