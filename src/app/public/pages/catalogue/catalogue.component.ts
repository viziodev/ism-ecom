import { Component, OnInit, inject } from '@angular/core';
import { ArticleServiceImpl } from '../../../core/services/impl/article.service.impl';
import { RestResponse } from '../../../core/models/rest.response';
import { ArticleCatalogue } from '../../../core/models/article.models';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit {
  private articleService:ArticleServiceImpl=inject(ArticleServiceImpl)
  response!:RestResponse<ArticleCatalogue[]>
  ngOnInit(): void {
    this.articleService.findAll().subscribe(data=>{
      if(data.statuts==200) 
         this.response=data
    })
  }

}
