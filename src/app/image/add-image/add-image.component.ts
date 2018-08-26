import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ImagesService } from '../images.service';
import { Img } from '../models/img.model';

@Component({
  selector: 'mev-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent {
  newImageForm = new FormGroup({
    src: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });

  constructor(
    private dialogRef: MatDialogRef<AddImageComponent>,
    private imagesService: ImagesService) { }

  addImage(img: Img) {
    this.imagesService.addImage(this.newImageForm.value);
    this.dialogRef.close();
  }
}
