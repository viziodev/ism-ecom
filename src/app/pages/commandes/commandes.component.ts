import { Component } from '@angular/core';
import { CommandeServiceImpl } from '../../core/services/impl/commande.service.impl';
import CommandeListe from '../../core/models/commande.liste';
import { RestResponse } from '../../core/models/rest.response';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { PaginationModel } from '../../core/models/pagination.model';

@Component({
  selector: 'app-commandes',
  standalone: true,
  imports: [CommonModule,PaginationComponent,RouterLink],
  templateUrl: './commandes.component.html',
  styleUrl: './commandes.component.css'
})
export class CommandesComponent {
   response?:RestResponse<CommandeListe[]>
   idClient:string | null="all"
   dataPagination:PaginationModel={
    pages:[],
    currentPage:0
}
  constructor(private commandeService:CommandeServiceImpl,
              private route:ActivatedRoute){}
     ngOnInit(): void {
       this.idClient=this.route.snapshot.paramMap.get("id")
       this.refresh()
     }
      refresh(page:number=0){
       this.commandeService.findAll(page,this.idClient).subscribe(data=>{
           this.response=data;
           this.dataPagination.pages=data.pages!
           this.dataPagination.currentPage=data.currentPage!
       })
       }
     
      paginate(page: number) {
       this.refresh(page) 
    }
}
