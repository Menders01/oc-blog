import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() loveIts: number;
  @Input() titlePost: string;
  @Input() contentPost: string;
  @Input() dateh = new Date();
  constructor() { }

  onLove(love: boolean) {
    if (love) {
      this.loveIts++;
    } else {
      this.loveIts--;
    }
  }
  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    }
  }

  ngOnInit() {
  }

}
