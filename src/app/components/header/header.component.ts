import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  pageLinks: Array<any> = [
    {
      "name": 'Home',
      "url": ''
    },
  ]

  constructor(public location: Location) {}

}
