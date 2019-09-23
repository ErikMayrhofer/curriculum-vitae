import { Component, AfterViewInit } from '@angular/core';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'Lebenslauf';

  private ctrl = new ScrollMagic.Controller();

  ngAfterViewInit(): void {
    new ScrollMagic.Scene({
      triggerHook: 'onLeave',
      triggerElement: '#name-badge',
    })
    .setPin('#name-badge')
    .setClassToggle('#name-badge', 'full')
    .addTo(this.ctrl);
  }
}
