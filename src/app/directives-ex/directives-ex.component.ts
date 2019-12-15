import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ex',
  //templateUrl: './directives-ex.component.html',
  templateUrl: './directives-ex.component.html',
  //  styleUrls: ['./directives-ex.component.css']
  styles: ['.classOne{color: red;}.classTwo{background-color: skyblue;}']
})
export class DirectivesExComponent implements OnInit {

  constructor() { }

  public devYellow = 'yellow';
  public cone = true;
  public ctwo = true;

  public isvalid: boolean = true;
  public empName = 'Deva';
  //console.log(empName);
  divShowHide(val: boolean) {
    this.isvalid = val;
  }

  public selectChoice = '';

  eventTri(val: any) {
    this.selectChoice = val.target.value;
    
    // alert(val.target.value);
  }
  ngOnInit() {
  }


}
