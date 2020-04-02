import {
  Directive,
  Input,
  Inject,
  Renderer2,
  ElementRef,
  OnInit,
} from '@angular/core';
import { WebAppEvent } from '../models/web-app-event.model';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appComponentPreview]',
})
export class ComponentPreviewDirective implements OnInit {
  @Input() event: WebAppEvent;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document
  ) {}

  ngOnInit(): void {
    // const styles = this.event.component.styles;
    const frame: HTMLIFrameElement = this.document.createElement('iframe');

    frame.srcdoc = `<div id="_component-preview_parent">${this.event.component.innerHTML}</div>`;

    // this.renderer.appendChild(this.elementRef.nativeElement, frame);
    // setTimeout(() => {
    //   const element = frame.contentDocument.body.children[0].children[0];
    //   try {
    //     Object.entries(styles).forEach(([key, value]) => {
    //       element.style.setProperty(key, value);
    //     });
    //     element.style.setProperty('color', 'red');
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }, 25);
  }
}
