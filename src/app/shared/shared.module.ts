import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { MatCardModule } from '@angular/material/card';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { SerieCardComponent } from './components/serie-card/serie-card.component';

@NgModule({
  declarations: [
    CharacterCardComponent,
    ProgressBarComponent,
    ComicCardComponent,
    SerieCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  exports: [
    CharacterCardComponent,
    ProgressBarComponent,
    FlexLayoutModule,
    ComicCardComponent,
    SerieCardComponent
  ],
})
export class SharedModule {}
