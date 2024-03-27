import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientCreate } from '../../../models/client';
import { ClientServiceImpl } from '../../../services/impl/client.service.impl';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form.client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.client.component.html',
  styleUrl: './form.client.component.css'
})
export class FormClientComponent implements OnInit {
  constructor(private clientService:ClientServiceImpl,private router:Router){

  }
  clientModel:ClientCreate={
        nomComplet: "",
        telephone:  "",
        quartier:  "",
        ville:      "",
        numVilla:  "",
        username:  "",
        password:  "",
  }
    ngOnInit(): void {
   }
    onFormSubmit() {
          this.clientService.create(this.clientModel).subscribe(data=>{
              this.router.navigateByUrl("/clients")
          });
    }
 
}
