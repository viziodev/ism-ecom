import { Injectable } from '@angular/core';
import { Role } from '../../models/role.enum';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor() { }

  roles = [Role.Admin, Role.Client];

  isAdmin() {
    return this.roles.includes(Role.Admin);
  }
  isClient() {
    return this.roles.includes(Role.Client);
  }
}
