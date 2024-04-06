import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { inject } from '@angular/core';
import { AuthentificationService } from './core/services/auth/authentification.service';

export const routes: Routes = [
   {
     path: 'admin',
       loadChildren: () => import('./secure/secure.module')
      .then(mod => mod.SecureModule),
       canMatch: [() => inject(AuthentificationService).isAuthenticated],
     },
     {
      path: 'catalogue',
        loadChildren: () => import('./public/public.module')
       .then(mod => mod.PublicModule)
      },
      {
        path: '',
        redirectTo: '/catalogue/catalogue',
        pathMatch: 'full',
      },
      { 
        path: '**', 
        component: PageNotFoundComponent
     },
   
];
