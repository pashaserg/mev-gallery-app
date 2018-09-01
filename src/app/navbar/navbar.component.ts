import { Component } from '@angular/core';
import { ImagesService } from '../image/images.service';
import { MatDialog } from '@angular/material/dialog';
import { AddImageComponent } from '../image/add-image/add-image.component';

@Component({
  selector: 'app-mev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'Gallery';

  constructor(
    private imagesService: ImagesService,
    private dialog: MatDialog) { }

  openAddImageDialog() {
    const dialogRef = this.dialog.open(AddImageComponent, {
      width: '400px'
    });
  }

}
