import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  @ViewChild('content')
  private content: ElementRef;

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

  scrollToContent(): void {
    this.scrollToElement(this.content);
  }

  scrollToElement(element: ElementRef): void {
    console.log(element);
    element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
