import { Component, OnInit } from '@angular/core';
import { ISudokuPuzzle, SudokuPuzzle } from './sudoku-puzzle.model';
import { SudokuPuzzleService } from './sudoku-puzzle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sudoku-puzzle',
  templateUrl: './sudoku-puzzle.component.html',
  styleUrls: ['./sudoku-puzzle.component.css']
})
export class SudokuPuzzleComponent implements OnInit {
  constructor(
    private sudokuService: SudokuPuzzleService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      if (params['rules']) {
        this.showRules = true;
      } else {
        this.setSize(+params['size'], +params['col'], +params['row']);
      }
  });
  }
  lstSudoku: SudokuPuzzle[] = [];
  size = 0;
  won = false;
  showRules = false;
  showPopUp = false;
  sudoku: SudokuPuzzle = {
    row_index: 0,
    column_index: 0,
    box_index: -1,
    availableNumbers: [],
    cell_number: 0,
    details: false
  };
  sudokuType = [
    { id: 0, name: '3x3' },
    { id: 1, name: '6x6' },
    { id: 2, name: '9x9' }
  ];
  lst = [];
  aiPlays() {
    this.lstSudoku.forEach(element => {
      if (element.cell_number === 0) {
        this.assign(element, element.availableNumbers[0]);
      }
    });
    this.won = true;
  }
  assign(item, number) {
    const index = this.lstSudoku.findIndex(
      x =>
        x.column_index === item.column_index && x.row_index === item.row_index
    );

      this.lstSudoku[index].cell_number = number;
      this.lstSudoku[index].availableNumbers = [];
      this.remove(number, item);
      item.details = false;
  }

  fillSudokuPuzzle9x9() {
    const tempLst = this.sudokuService.getrandomSudokuPuzzle9x9();
    console.log('random:', tempLst);
    for (let index = 0; index < tempLst.length; index++) {
        if (tempLst[index] !== 0) {
          this.lstSudoku[index].cell_number = tempLst[index];
        }
      }
    this.folowTheRule();
  }
  fillSudokuPuzzle6x6() {
    console.log(this.lstSudoku);
    const tempLst = this.sudokuService.getrandomSudokuPuzzle6x6();
    for (let index = 0; index < tempLst.length; index++) {
        if (tempLst[index] !== 0) {
          this.lstSudoku[index].cell_number = tempLst[index];
        }
      }
    this.folowTheRule();
  }
  folowTheRule() {
    this.lstSudoku.forEach(element => {
      if (element.cell_number !== 0) {
        this.remove(element.cell_number, element);
      }
    });
  }
  hide(item) {
    item.details = false;
  }
  init() {
    this.sudoku = {
      row_index: 0,
      column_index: 0,
      box_index: -1,
      availableNumbers: [],
      cell_number: 0,
      details: false
    };
  }

  ngOnInit() {}

  remove(num, item) {
    this.lstSudoku.forEach(element => {
      // remove from row
      if (element !== item) {
        if (element.row_index === item.row_index) {
          const r = element.availableNumbers.findIndex(x => x === num);
          if (r > -1) {
            element.availableNumbers.splice(r, 1);
            if (element.availableNumbers.length === 1) {
              this.remove(element.availableNumbers[0], element);
            }
          }
        }
        // remove from column
        if (element.column_index === item.column_index) {
          const c = element.availableNumbers.findIndex(x => x === num);
          if (c > -1) {
            element.availableNumbers.splice(c, 1);
            if (element.availableNumbers.length === 1) {
              this.remove(element.availableNumbers[0], element);
            }
          }
        }
        // remove from box
        if (element.box_index === item.box_index) {
          const b = element.availableNumbers.findIndex(x => x === num);
          if (b > -1) {
            element.availableNumbers.splice(b, 1);
            if (element.availableNumbers.length === 1) {
              this.remove(element.availableNumbers[0], element);
            }
          }
        }
      }
    });
  }
  reload() {
    location.reload();
  }
  return(item) {
    this.lstSudoku.forEach(element => {
      element.availableNumbers = this.size === 6 ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4, 5, 6, 7, 8, 9];
      if (element === item) {
        element.cell_number = 0;
      }
    });
    this.lstSudoku.forEach(element => {
      if (element.cell_number !== 0) {
        this.remove(element.cell_number, element);
      }
    });
    console.log(this.lstSudoku);
  }
  setSize(size, col, row) {
    this.size = size; // needed for HTML
    for (let index = 0; index < size * size; index++) {
      for (let i = 0; i < size; i++) {
        this.sudoku.availableNumbers.push(i + 1);
      }
      this.sudoku.row_index = Math.floor(index / size); // get int
      this.sudoku.column_index = index - this.sudoku.row_index * size;
      this.sudoku.box_index =
        Math.floor(this.sudoku.column_index / col) +
        Math.floor(this.sudoku.row_index / row) * col;
      this.lstSudoku.push(this.sudoku);
      this.init();
    }
  switch (size) {
    case 9 : this.fillSudokuPuzzle9x9(); break;
    case 6 :  this.fillSudokuPuzzle6x6(); break;
  }
  }

  showNextMove(item) {
    this.lst = item.availableNumbers;
    item.details = !item.details;
  }
}
