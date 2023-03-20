import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component(
  {
    selector: 'app-upvote',
    template: `
      <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
          <div class="votingButton">
            <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
          </div>
          <div class="badge badge-inverse votingCount">
            <div>{{count}}</div>
          </div>
        </div>
      </div>
    `,
    styleUrls: ['./upvote.component.css']
  }
)
export class UpvoteComponent implements OnInit{
  iconColor: string;
  constructor() {
  }

  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  onClick(): void {
    this.count += (this.iconColor === 'white') ? 1 : -1;
    this.iconColor = (this.iconColor === 'white') ? 'red' : 'white';

  }
  ngOnInit(): void {
  }
}
