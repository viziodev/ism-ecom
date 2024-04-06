import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';

const routes: Routes = [
  {
    path:"",
    component:PublicComponent,
    children:[
      {
        path:"catalogue",
        component:CatalogueComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
