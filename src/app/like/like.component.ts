import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('like-count') likeCount: number;
  @Input('is-liked') isLiked: boolean;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.likeCount += this.isLiked ? -1 : 1;
    this.isLiked = !this.isLiked;


  }

}
