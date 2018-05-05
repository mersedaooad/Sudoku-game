import { TestBed, inject } from '@angular/core/testing';

import { SudokuPuzzleService } from './sudoku-puzzle.service';

describe('SudokuPuzzleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SudokuPuzzleService]
    });
  });

  it('should be created', inject([SudokuPuzzleService], (service: SudokuPuzzleService) => {
    expect(service).toBeTruthy();
  }));
});
