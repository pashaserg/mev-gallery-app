import { Component, OnInit } from '@angular/core';

import { ImagesService } from '../image/images.service';
import { Img } from '../image/models/img.model';

@Component({
  selector: 'mev-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  images: Img[];

  constructor(
    private imagesService: ImagesService,
  ) { }

  ngOnInit() {
    this.images = this.imagesService.getImages();
  }

}