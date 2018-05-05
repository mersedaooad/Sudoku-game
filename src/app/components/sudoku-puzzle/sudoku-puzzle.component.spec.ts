import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuPuzzleComponent } from './sudoku-puzzle.component';

describe('SudokuPuzzleComponent', () => {
  let component: SudokuPuzzleComponent;
  let fixture: ComponentFixture<SudokuPuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuPuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
