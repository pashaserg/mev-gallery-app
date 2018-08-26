import { Component, OnInit } from '@angular/core';

import { Img } from './models/img.model';
import { ImagesService } from './images.service';
import { FullsizeImageComponent } from './fullsize-image/fullsize-image.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'mev-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  images: Img[];

  constructor(
    private imagesService: ImagesService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.images = this.imagesService.getImages();
  }

  openImage(img: Img) {
    const dialogRef = this.dialog.open(FullsizeImageComponent, {
      // maxHeight: '90vh',
      data: img
    });

  }
}