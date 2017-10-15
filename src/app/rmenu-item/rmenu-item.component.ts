import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rmenu-item',
  templateUrl: './rmenu-item.component.html',
  styleUrls: ['./rmenu-item.component.scss']
})
export class RmenuItemComponent implements OnInit {

  @Input() menuitem;
  constructor() { }

  ngOnInit() {
  }

}
