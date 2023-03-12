import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        {{title}}
      </h4>
      <ng-content *ngIf="visible" ></ng-content>
    </div>
  `
})

export class CollapsibleWellComponent {
  visible = true;
  @Input() title: string;

  toggleContent(): void {
    this.visible = !this.visible;
  }
}
