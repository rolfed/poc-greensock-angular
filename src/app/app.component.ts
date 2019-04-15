import { Component, OnInit, ViewChild } from '@angular/core';
import { CallToActionComponent } from './call-to-action/call-to-action.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'poc-greensock-angular';

  @ViewChild(CallToActionComponent) private cta: CallToActionComponent;

  ngOnInit() {
  }

}
