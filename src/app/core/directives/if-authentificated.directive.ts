import { NgIf } from '@angular/common';
import { Directive, OnInit, inject } from '@angular/core';
import { AuthentificationService } from '../services/auth/authentification.service';

@Directive({
  selector: '[IfAuthentificated]',
  standalone: true,
  hostDirectives: [{
    directive: NgIf
  }]
})
export class IfAuthentificatedDirective implements OnInit {
  private authenticationService = inject(AuthentificationService);
  private ngIfDirective = inject(NgIf);
  constructor() { }
  ngOnInit(): void {
    this.ngIfDirective.ngIf = this.authenticationService.isAuthenticated;
  }

}
