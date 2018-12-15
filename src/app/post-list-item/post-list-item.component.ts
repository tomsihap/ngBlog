import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

  onLoveits(likeOrDislike: String) {
    switch (likeOrDislike) {
      case 'like':
        this.post.loveits++;
        break;

      case 'dislike':
        this.post.loveits--;
        break;

      default:
        return 0;
    }
  }
}
