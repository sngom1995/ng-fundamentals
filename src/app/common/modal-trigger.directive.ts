import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit{

  element: HTMLElement;
  @Input('appModalTrigger') modalId: string;
    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
      this.element = ref.nativeElement;
    }
  ngOnInit(): void {
    this.element.addEventListener('click', e => {
        this.$(`#${this.modalId}`).modal({});
      }
    );
  }
}
