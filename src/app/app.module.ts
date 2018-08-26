import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog"

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { ImagesService } from "./content/images.service";
import { FullsizeImageComponent } from './content/fullsize-image/fullsize-image.component';

const appRoutes: Routes = [
  { path: "", component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    FullsizeImageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    ImagesService
  ],
  entryComponents: [
    FullsizeImageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
