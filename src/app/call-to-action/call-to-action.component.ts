import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Power1, TweenLite } from 'gsap/all';
import { TimeLineLite } from 'gsap/TimeLineLite';

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
    this.animationInit(this.titleRef, 1);
    this.animationInit(this.subtitleRef, 1.1);
    this.animationInit(this.contentRef, 1.2);
  }

  private animationInit(element: ElementRef, duration?: number): TweenLite {
    if (!duration) {
      duration = 0.75;
    }

    const elementTweenLite = TweenLite.fromTo(
      element.nativeElement,
       duration,
      {x: -999},
      {x: 0, ease: Power1.easeIn},
      );

    return elementTweenLite;
  }

  private animationTimeLine(): TimeLineLite {
    const tl = TimeLineLite
      .to();

    return tl;
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
