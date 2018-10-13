import { Component, OnInit, Input} from '@angular/core';

interface Operation {
  value: string;
  name: string;
};

declare const OPERATIONS;

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})


export class CalculatorComponent implements OnInit {

  
  name: string;
  @Input() nr: number;
  result: number = 0;
  operations = OPERATIONS;
  @Input() selectedOp: Operation;
  selectedCalcList = [];
    
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('on init');
  }

  add(){
    console.log('add click');
    this.selectedCalcList.push({
        name: this.selectedOp.name,
        value: this.selectedOp.value,
        nr: this.nr
    })
  }
  
  reset(){
    console.log('reset click');
    this.nr = 0;
    this.result = 0;
    this.selectedCalcList = [];
    this.selectedOp = null;    
  }
  
  calculate = function(){
    console.log('calculate click');
    let calcLength = this.selectedCalcList.length-1;
    this.result = this.selectedCalcList[calcLength].nr;
    for(let i=0; i<calcLength; i++){
        let exp = this.result + '' + this.selectedCalcList[i].value + this.selectedCalcList[i].nr;
        this.result = eval(exp);
    }
    return this.result;
  } 
}
