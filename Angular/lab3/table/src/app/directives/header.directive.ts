import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeader]',
})
export class HeaderDirective {
  constructor(header: ElementRef) {
    header.nativeElement.style.backgroundColor = 'black';
    header.nativeElement.style.color = 'yellow';
    header.nativeElement.style.fontFamily  = 'Helvetica';
  }
}
