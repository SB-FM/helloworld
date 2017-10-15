import { Component, OnInit } from '@angular/core';
import { EventArgsOnChange } from '../favorite/favorite.component';



@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  post = {
    title: 'app',
    isFavorite: true
  };

  _author = {
    likeCount: 42,
    isLiked: false
  };

  authors = ['John Doe', 'Jane Doe', 'Alfred Vosswinkel'];
  constructor() { }

  ngOnInit() {
  }
  getAuthors() {
    return this.authors;
  }
  onFavoriteChanged(eventArgs: EventArgsOnChange) {
    console.log('favorite changed:', eventArgs.isFavorite);
  }

}
