import { Component, OnInit, Input } from '@angular/core';
import { ImagesService } from '../../image/images.service';
import { MatDialog } from '@angular/material/dialog';
import { Img } from '../../image/models/img.model';
import { FullsizeImageComponent } from '../fullsize-image/fullsize-image.component';

@Component({
  selector: 'mev-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  @Input() image: Img;

  constructor(private imagesService: ImagesService,
    private dialog: MatDialog) { }

  ngOnInit() {
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
