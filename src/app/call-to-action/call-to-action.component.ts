import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Power1, TweenLite, TimeLineLite } from 'gsap/all';

declare var TweenLite: any;
declare var TimeLineLite: any;

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
  @ViewChild('title')
  private _titleRef: ElementRef;

  @ViewChild('subtitle')
  private _subtitleRef: ElementRef;

  @ViewChild('content')
  private _contentRef: ElementRef;

  constructor(private _elem: ElementRef) {}

  ngOnInit(): void {
    console.log('TITLE: ', this._titleRef);
    this.animationInit(this.titleRef);
    this.animationInit(this.subtitleRef);
    this.animationInit(this.contentRef);
  }

  private animationInit(element: ElementRef): TweenLite {
    const elementTweenLite = TweenLite.fromTo(
      element.nativeElement,
      1,
      {x: -999},
      {x: 0, ease: Power1.easeIn}
      );

    return elementTweenLite;
  }

  get titleRef(): ElementRef {
    return this._titleRef;
  }

  get subtitleRef(): ElementRef {
    return this._subtitleRef;
  }

  get contentRef(): ElementRef {
    return this._contentRef;
  }
}
