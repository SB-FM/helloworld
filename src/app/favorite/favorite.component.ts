import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface EventArgsOnChange {
  isFavorite: boolean;
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('is-favorite') isFavorite: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('change') click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({isFavorite: this.isFavorite});
  }
}
