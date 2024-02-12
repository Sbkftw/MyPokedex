import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pokeBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = 'lightgrey';
  private defaultColor: string = 'red';
  private defaultHeight: number = 180;

  @Input('pokeBorderCard') bordelColor: string;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color : string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.bordelColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

}
