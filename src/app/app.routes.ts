import { Routes } from '@angular/router';
import { ClientsComponent } from './core/pages/clients/clients.component';
import { CommandesComponent } from './core/pages/commandes/commandes.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { FormClientComponent } from './core/pages/clients/form.client/form.client.component';
import { FormCommandeComponent } from './core/pages/form.commande/form.commande.component';

export const routes: Routes = [
  
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
      path:"form-cmde/:id",
       component:FormCommandeComponent,
        },
       {
        path:"commandes/:id",
         component:CommandesComponent,
        },
       
       { path: '',   redirectTo: '/clients', pathMatch: 'full' }, 
    
       { 
        path: '**', 
        component: PageNotFoundComponent
       },
   
];
