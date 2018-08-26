import { Component, OnInit } from '@angular/core';

import { ImagesService } from '../image/images.service';
import { FullsizeImageComponent } from './fullsize-image/fullsize-image.component';
import { MatDialog } from '@angular/material/dialog';
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
    private dialog: MatDialog) { }

  ngOnInit() {
    this.images = this.imagesService.getImages();
  }

  openImage(img: Img) {
    const dialogRef = this.dialog.open(FullsizeImageComponent, {
      data: img,
      panelClass: 'custom-dialog-container'
    });
  }

  removeImage(img: Img) {
    this.imagesService.removeImage(img);
  }

}