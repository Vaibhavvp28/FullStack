import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component'
import { FormsModule }   from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AboutUsComponent } from './about-us/about-us.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MainContentComponent,
    ContactUsComponent,
    CartComponent,
    CheckoutComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    ToastrModule.forRoot({ timeOut: 2000 ,enableHtml: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
