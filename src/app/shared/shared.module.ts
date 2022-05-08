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

@NgModule({
  declarations: [
    CharacterCardComponent,
    ProgressBarComponent,
    ComicCardComponent,
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
  ],
})
export class SharedModule {}
