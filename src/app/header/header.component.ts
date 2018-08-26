import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  slides = [
    {
      src: 'https://source.unsplash.com/RCAhiGJsUUE/1920x1080',
      description: '1 slide descr'
    },
    {
      src: 'https://source.unsplash.com/wfh8dDlNFOk/1920x1080',
      description: '2 slide descr'
    },
    {
      src: 'https://source.unsplash.com/O7fzqFEfLlo/1920x1080',
      description: '3 slide descr'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
