import { Component, OnInit } from '@angular/core';
import { RestResponse } from '../../models/rest.response';
import { ClientListe } from '../../models/client';
import { ClientServiceImpl } from '../../services/impl/client.service.impl';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PaginationModel } from '../../models/pagination.model';
import { PaginationComponent } from '../../../components/pagination/pagination.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,PaginationComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit{
  response?:RestResponse<ClientListe[]>
  paginateData:PaginationModel={
    currentPage:0,
    pages:[]
  }
  constructor(private clientService:ClientServiceImpl){}
    ngOnInit(): void {
       this.refresh()
    }

     refresh(page:number=0,keyword:string=""){
      this.clientService.findAll(page,keyword).subscribe(data=>{
           this.response=data
           this.paginateData.currentPage=data.currentPage!
           this.paginateData.pages=this.response.pages!
           console.log(this.paginateData);
      } );
    }
    paginate(page: number) {
      this.refresh(page) 
    }
    searchTelephone(telephone: string) {
           if (telephone.length>=3) {
               this.refresh(0,telephone)  
           }
    }
    
}
