import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rmenu',
  templateUrl: './rmenu.component.html',
  styleUrls: ['./rmenu.component.scss']
})
export class RmenuComponent implements OnInit {

  items =
  {
    title: 'Konten verwalten',
    items: [{
      item: 'Neu anlegen',
      iconurl: '/assets/images/sample_icon.png'
    },
    {
      item: 'Passwörter zurücksetzen',
      iconurl: '/assets/images/sample_icon.png'
    },
    {
      item: 'Reset',
      iconurl: '/assets/images/sample_icon.png'
    },
  ]
  }
  ;

  constructor() { }

  ngOnInit() {
  }

}
