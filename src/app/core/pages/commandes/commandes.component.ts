import { Component } from '@angular/core';
import { CommandeServiceImpl } from '../../services/impl/commande.service.impl';
import CommandeListe from '../../models/commande.liste';
import { RestResponse } from '../../models/rest.response';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commandes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commandes.component.html',
  styleUrl: './commandes.component.css'
})
export class CommandesComponent {
   response?:RestResponse<CommandeListe[]>
   idClient:string | null="all"
  constructor(private commandeService:CommandeServiceImpl,
              private route:ActivatedRoute){}
     ngOnInit(): void {
      this.idClient=this.route.snapshot.paramMap.get("id")
       this.refresh()
     }
      refresh(page:number=0){
       this.commandeService.findAll(page,this.idClient).subscribe(data=> this.response=data);
     }
      paginate(page: number) {
       this.refresh(page) 
    }
}
