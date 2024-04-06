import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ClientServiceImpl } from '../../../../core/services/impl/client.service.impl';
import { ArticleServiceImpl } from '../../../../core/services/impl/article.service.impl';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-commande',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-commande.component.html',
  styleUrl: './form-commande.component.css'
})
export class FormCommandeComponent implements OnInit {

  
  form=this.fb.group({
    articlesPanier:this.fb.array([

    ],Validators.min(1)),
    total:new FormControl(0,[]),
    client:this.fb.group({
       id:new FormControl() ,
       nomComplet:[],
       telephone:["",[Validators.required,Validators.pattern("^(77|76|78){1}[0-9]{7}")]],
       adresseComplet:[]
    }),
    article:this.fb.group({
      idArticle:[],
      libelle:["",[Validators.required,Validators.minLength(5)]],
      montant:[],
      quantiteStock:[],
      quantite:[0,[Validators.required,Validators.min(1),]],
      prix:[]

    },{validator:this.validateQteCmde()})
  })
  constructor(private fb: FormBuilder,
    private clientservice:ClientServiceImpl,
    private articleService:ArticleServiceImpl){
    
  }
  get total(){
    return this.form.controls["total"] as FormControl
  }
  get articlesPanier(){
    return this.form.controls["articlesPanier"] as FormArray
  }
  get client(){
    return this.form.controls["client"] as FormGroup
  }

  get article(){
    return this.form.controls["article"] as FormGroup
  }
  ngOnInit(): void {
   
  }

      onSearchClientByTel() {
           const tel= this.client.get("telephone")?.value 
           if (tel?.length==9) {
            this.clientservice.findByTelephone(tel).subscribe(response=>{
                if(response.statuts==200){
                  this.client.patchValue(response.results)
                }
            })
           }
      }
        addProduitToPanier() {
            let prix:number =this.article.get("prix")?.value   
            let qteCmde:number =Number.parseInt(this.article.get("quantite")?.value) 
            let montant:number=prix* qteCmde
            this.total.setValue(this.total.value+montant)
            this.article.get("montant")?.setValue(montant)
            let pos:number= this.articlesPanier.getRawValue().findIndex(article=>article.idArticle==this.article.get("idArticle")!.value)
             if (pos==-1) {
                  this.articlesPanier.push(this.fb.group({
                    idArticle:[this.article.get("idArticle")?.value],
                    libelle:[this.article.get("libelle")?.value,],
                    montant:[this.article.get("montant")?.value],
                    quantiteStock:[this.article.get("quantiteStock")?.value],
                    quantite:[this.article.get("quantite")?.value],
                    prix:[this.article.get("prix")?.value]
                  }));
              } else {
                  const articleDuPanier= this.articlesPanier.at(pos)
                  let qte:number=Number.parseInt(articleDuPanier.get("quantite")?.value)+qteCmde
                  articleDuPanier.get("quantite")?.setValue(qte)
                  articleDuPanier.get("montant")?.setValue(articleDuPanier.get("montant")?.value+montant)
             }
               this.article.reset()

        }
           onSearchProduitByLibelle() {
             const libelle= this.article.get("libelle")?.value 
             if (libelle?.length>=5) {
              this.articleService.findByLibelle(libelle).subscribe(response=>{
              
                if(response.statuts==200){
                       this.article.patchValue(response.results)
                       let pos:number= this.articlesPanier.getRawValue().findIndex(article=>article.idArticle==this.article.get("idArticle")!.value)
                       if(pos!=-1){
                        const articleDuPanier= this.articlesPanier.at(pos)
                        let qte:number=Number.parseInt(articleDuPanier.get("quantite")?.value)
                        this.article.get("quantiteStock")?.setValue(this.article.get("quantiteStock")?.value - qte)
                       }
                   }
              })
             }
           }
        
    onSubmit() {
        
    }
    validateQteCmde():ValidatorFn{
        return (article:AbstractControl):ValidationErrors|null=>{
           const qteCmde=article.get("quantite")?.value
           const qteStock=article.get("quantiteStock")?.value
           if(isNaN(Number.parseInt(qteCmde))){
               return {'isNotNumber':true}
           }
            if(Number.parseInt(qteCmde)> Number.parseInt(qteStock)){
                return {'qteNotValid':true}
            }

          return null;
        };
    }

}
