import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure/secure.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { FormClientComponent } from './pages/clients/form.client/form.client.component';
import { FormCommandeComponent } from './pages/commandes/form-commande/form-commande.component';
import { CommandesComponent } from './pages/commandes/commandes.component';

const routes: Routes = [
  {
    path:"",
    component:SecureComponent,
    children:[
      {
        path:"clients",
          children:[
            {
              path:"",
              component:ClientsComponent,
            },
            {
              path:"form",
              component:FormClientComponent
            }
        ]
       },
       {
        path:"form-cmde",
        component:FormCommandeComponent
       },
       {
        path:"commandes/:id",
        component:CommandesComponent
       },

    ],
    
  },
  
   
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
