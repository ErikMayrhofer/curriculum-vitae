import { Component, AfterViewInit } from '@angular/core';
import * as ScrollMagic from 'scrollmagic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'Lebenslauf';

  private ctrl = new ScrollMagic.Controller({addIndicators: true});

  ngAfterViewInit(): void {
    new ScrollMagic.Scene({
      triggerElement: '.bigyeets',
      // duration: 100,
      // offset: 50
    }).setPin('.bigyeets').addTo(this.ctrl);
  }
}
