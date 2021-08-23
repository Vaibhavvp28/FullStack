import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
{
  path:'contact', component: ContactUsComponent
},
{
  path: '', component: ContentComponent
},
{
  path: 'cart', component: CartComponent
},
{
  path: 'checkout', component: CheckoutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
