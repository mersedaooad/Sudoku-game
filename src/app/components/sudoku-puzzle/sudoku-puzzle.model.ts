export interface ISudokuPuzzle {
row_index: number;
column_index: number;
box_index: number;
availableNumbers: number[];
cell_number: number;
details: boolean;
}
export class SudokuPuzzle {
  row_index: number;
  column_index: number;
  box_index: number;
  availableNumbers: number[];
  cell_number: number;
  details: boolean;
  }
