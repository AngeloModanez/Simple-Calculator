import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  num1!: number;
  num2!: number;
  total: number = 0;

  calcAdd(){
    this.total = this.num1 + this.num2;
  }

  calcSub(){
    this.total = this.num1 - this.num2;
  }

  calcMul(){
    this.total = this.num1 * this.num2;
  }

  calcDiv(){
    this.total = this.num1 / this.num2;
  }
}
