import { Component, OnInit } from '@angular/core';
import { RestResponse } from '../../../core/models/rest.response';
import { ClientListe } from '../../../core/models/client.liste';
import { ClientServiceImpl } from '../../../core/services/impl/client.service.impl';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { PaginationModel } from '../../../core/models/pagination.model';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule,RouterLink,PaginationComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit{

 
  response?:RestResponse<ClientListe[]>
  dataPagination:PaginationModel={
         pages:[],
         currentPage:0
  }
  constructor(private clientService:ClientServiceImpl){}
    ngOnInit(): void {
       this.refresh()
    }

     refresh(page:number=0,keyword:string=""){
      this.clientService.findAll(page,keyword).subscribe(data=> {
          this.response=data
          this.dataPagination.pages=data.pages!
          this.dataPagination.currentPage=data.currentPage!
      });
    }
    paginateParent(page: number) {
      this.refresh(page) 
    }
    searchTelephone(telephone: string) {
           if (telephone.length>=3) {
               this.refresh(0,telephone)  
           }
    }
    
}
