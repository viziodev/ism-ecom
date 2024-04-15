import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './secure/pages/page-not-found/page-not-found.component';
import { inject } from '@angular/core';
import { AuthentificateService } from './core/services/auth/authentificate.service';



export const routes: Routes = [
      {
        path:"admin",
        loadChildren:()=>import("./secure/secure.module").then(mod=>mod.SecureModule),
        canMatch:[()=>inject(AuthentificateService).isAuthentificated]
      },
      {
        path:"client",
        loadChildren:()=>import("./public/public.module").then(mod=>mod.PublicModule)

      },
      {
      path:"",
      redirectTo:"/clients",
      pathMatch:"full"
       },
     
      { 
        path: '**', 
        component:PageNotFoundComponent
     },
   
];
