import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Img } from '../models/img.model';

@Component({
  selector: 'mev-fullsize-image',
  templateUrl: './fullsize-image.component.html',
  styleUrls: ['./fullsize-image.component.css']
})
export class FullsizeImageComponent {

  constructor(
    public dialogRef: MatDialogRef<FullsizeImageComponent>,
    @Inject(MAT_DIALOG_DATA) public img: Img) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
