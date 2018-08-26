import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from './app.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { FullsizeImageComponent } from './content/fullsize-image/fullsize-image.component';
import { AddImageComponent } from './image/add-image/add-image.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ImagesService } from './image/images.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    appRoutes
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        FullsizeImageComponent,
        AddImageComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
      ],
      providers:[
        ImagesService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});