import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Power1, Bounce } from 'gsap/all';

declare var TweenMax: any;

@Component({
  selector: 'app-mushroom-example',
  templateUrl: './mushroom-example.component.html',
  styleUrls: ['./mushroom-example.component.scss']
})
export class MushroomExampleComponent implements OnInit {
  @ViewChild('mushroom') box: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.doIt();
  }

  doIt(): void {
    TweenMax.fromTo(this.box.nativeElement, 2, {x: 20}, {x: 440, ease: Power1.easeOut});
    TweenMax.fromTo(this.box.nativeElement, 2, {y: 20}, {y: 440, ease: Bounce.easeOut});
  }

}
