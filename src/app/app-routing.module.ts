import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadFileComponent } from './load-file/load-file.component';
import { OfferComponent } from './offer/offer.component';


const routes: Routes = [ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
