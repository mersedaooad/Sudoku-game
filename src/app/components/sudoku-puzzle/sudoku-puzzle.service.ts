import { Injectable } from '@angular/core';

@Injectable()
export class SudokuPuzzleService {

  constructor() {
    this.add();
   }
  randomSudokuPuzzle9x9: number[][] = [];
  randomSudokuPuzzle6x6: number[][] = [];
  add() {
    this.randomSudokuPuzzle9x9
      // tslint:disable-next-line:max-line-length
      .push([0, 0, 0, 0, 0, 0, 8, 5, 3, 0, 0, 0, 8, 0, 0, 0, 0, 4, 0, 0, 8, 2, 0, 3, 0, 6, 9, 5, 7, 4, 0, 0, 2, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 9, 0, 0, 6, 3, 7 , 9, 4, 0, 1, 0, 8, 5, 0, 0 , 7, 0, 0, 0, 0, 6, 0, 0, 0 , 6, 8, 2, 0, 0, 0, 0, 9, 0]);
      this.randomSudokuPuzzle9x9
      // tslint:disable-next-line:max-line-length
      .push([0, 9, 0, 0, 0, 0, 0, 5, 3, 0, 0, 0, 8, 0, 0, 0, 0, 4, 0, 0, 8, 2, 0, 3, 0, 6, 9, 5, 7, 4, 0, 0, 2, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 9, 0, 0, 6, 3, 7 , 9, 4, 0, 1, 0, 8, 5, 0, 0 , 7, 0, 0, 0, 0, 6, 0, 0, 0 , 6, 8, 2, 0, 0, 0, 0, 9, 0]);
      this.randomSudokuPuzzle9x9
      // tslint:disable-next-line:max-line-length
      .push([0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 4, 0, 0, 8, 2, 0, 3, 0, 6, 9, 5, 7, 4, 0, 0, 2, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 9, 0, 0, 6, 3, 7 , 9, 4, 0, 1, 0, 8, 5, 0, 0 , 7, 0, 0, 0, 0, 6, 0, 0, 0 , 6, 8, 2, 0, 0, 0, 0, 9, 0]);
      this.randomSudokuPuzzle9x9
      // tslint:disable-next-line:max-line-length
      .push([0, 0, 0, 0, 0, 0, 8, 5, 3, 0, 0, 0, 8, 0, 0, 0, 0, 4, 0, 0, 8, 2, 0, 3, 0, 6, 9, 5, 7, 4, 0, 0, 2, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 9, 0, 0, 6, 3, 7 , 9, 4, 0, 1, 0, 8, 5, 0, 0 , 7, 0, 0, 0, 0, 6, 0, 0, 0 , 6, 8, 2, 0, 0, 0, 0, 9, 0]);
  // fill 6x6

  // tslint:disable-next-line:max-line-length
  this.randomSudokuPuzzle6x6.push([1, 0, 0, 0, 0, 2, 3, 0, 6, 2, 4, 0, 2, 0, 3, 1, 6, 5, 4, 0, 5, 6, 1, 0, 5, 3, 1, 0, 2, 6, 6, 1, 2, 0, 0, 4]);
}
  getrandomSudokuPuzzle9x9(): number[] {
    return this.randomSudokuPuzzle9x9[Math.floor(Math.random() * 3) + 0];
  }
  getrandomSudokuPuzzle6x6(): number[] {
    return this.randomSudokuPuzzle6x6[Math.floor(Math.random() * 1) + 0];
  }
}
