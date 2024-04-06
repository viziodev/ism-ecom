import { Component, OnInit } from '@angular/core';
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
  response!:RestResponse<ArticleCatalogue[]>
  constructor(private articleService:ArticleServiceImpl){
    
  }
  ngOnInit(): void {
    this.articleService.findAll().subscribe(data=> {
      console.log(data);
      
      this.response=data
      
  });
  }
}
