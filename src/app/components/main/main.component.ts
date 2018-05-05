import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  navigate() {
    const navigationExtras: NavigationExtras = {
      queryParams: { size: 9, row: 3, col: 3}
    };
    this.router.navigate(['sudoku'], navigationExtras);
  }
  showRules() {
    const navigationExtras: NavigationExtras = {
      queryParams: { rules: 1}
    };
    this.router.navigate(['sudoku'], navigationExtras);
  }
}
