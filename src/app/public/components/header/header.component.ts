import { Component, inject } from '@angular/core';
import { AuthentificateService } from '../../../core/services/auth/authentificate.service';
import { IfAuthenticatedDirective } from '../../../core/directives/if-authenticated.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

})
export class HeaderComponent {
 public authServ:AuthentificateService=inject(AuthentificateService)

}
