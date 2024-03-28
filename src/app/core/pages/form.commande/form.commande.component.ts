import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientServiceImpl } from '../../services/impl/client.service.impl';
import { ClientListe } from '../../models/client';
import { RestResponse } from '../../models/rest.response';
import { ArticlePanier } from '../../models/article.model';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form.commande',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './form.commande.component.html',
  styleUrl: './form.commande.component.css'
})
export class FormCommandeComponent implements OnInit {




  form=this.fb.group({
     articlesPanier:  this.fb.array([]) ,
      total: new FormControl(),
      article:this.fb.group({
        idArticle:[0],
        libelle:[""],
        montant:[0],
        quantite:[0],
        quantiteStock:[0],
        prix:[0]
      }),
      client: this.fb.group({
       id: new FormControl(),
       nomComplet: new FormControl(),
       telephone:  new FormControl(),
       quartier:  new FormControl(),
     }),
 });

   get articlesPanier() {
      return this.form.controls["articlesPanier"] as FormArray;
   }
   get total() {
    return this.form.controls["total"] as FormControl;
  }
   get article() {
    return this.form.controls["article"] as FormGroup;
   }
  constructor(private route:ActivatedRoute,private clientService:ClientServiceImpl,private fb:FormBuilder){

 }
  idClient!:string | null
  
  ngOnInit(): void {
    this.idClient=this.route.snapshot.paramMap.get("id")
    this.clientService.findById(Number.parseInt(this.idClient!)).subscribe((data)=>{
       this.form.get("client")?.patchValue(data.results)
      
    })
  }

     onSearchArticleByLibelle() {
      let idArticle:number=this.article.get('idArticle')?.value
       if (idArticle!=0) {
          this.clientService.findByIdArticle(idArticle).subscribe((data)=>{
          this.article?.patchValue(data.results)
        })
          
      }  
    }
       addArticleToPanier() {
            let total:number=this.form.get("total")?.value
            let prix:number=this.article.get("prix")?.value!
            let quantite:number=this.article.get("quantite")?.value!
            let montant:number=prix*quantite
            this.article.get('montant')?.patchValue(montant)
            this.form.get("total")?.setValue(total+  montant)

            const formG = this.fb.group({
              idArticle:[this.article.get("idArticle")],
              libelle:[this.article.get("libelle")?.value],
              montant:[this.article.get("montant")?.value],
              quantite:[this.article.get("quantite")?.value],
              quantiteStock:[this.article.get("quantiteStock")?.value],
               prix:[this.article.get("prix")?.value]
             });
            
             this.articlesPanier.push(formG);
             this.article.reset()
             
      }

        onSubmit() {
           const { article: removedKey, ...panier } = this.form.getRawValue();
            console.log(panier);
            
          
          
        }
}
