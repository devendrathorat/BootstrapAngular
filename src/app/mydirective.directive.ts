import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(e1: ElementRef) {
    e1.nativeElement.style.backgroundColor = "green";
    e1.nativeElement.style.fontSize = "20px";



  }

}
