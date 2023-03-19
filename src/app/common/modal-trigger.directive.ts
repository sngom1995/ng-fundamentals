import {Directive, ElementRef, Inject, OnInit} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit{

  element: HTMLElement;
    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
      this.element = ref.nativeElement;
    }
  ngOnInit(): void {
    this.element.addEventListener('click', e => {
        this.$('#simple-modal').modal({});
      }
    );
  }
}
