import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SudokuPuzzleComponent } from './components/sudoku-puzzle/sudoku-puzzle.component';
import { FormsModule } from '@angular/forms';
import { SudokuPuzzleService } from './components/sudoku-puzzle/sudoku-puzzle.service';
import { AppRoutingModule } from './app.routing';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuPuzzleComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SudokuPuzzleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
