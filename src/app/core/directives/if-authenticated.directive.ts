import { NgIf } from '@angular/common';
import { Directive, OnInit, inject } from '@angular/core';
import { AuthentificateService } from '../services/auth/authentificate.service';

@Directive({
  selector: '[IfAuthenticated]',
  standalone: false,
  hostDirectives:[{
    directive:NgIf
  }]
})
export class IfAuthenticatedDirective implements OnInit {
  
   private   authServ:AuthentificateService=inject(AuthentificateService)
   private ngIfDirective=inject(NgIf)

   ngOnInit(): void {
    console.log(this.authServ.isAuthentificated);
    
      this.ngIfDirective.ngIf=this.authServ.isAuthentificated
  }


}
