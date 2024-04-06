import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientsComponent } from './secure/pages/clients/clients.component';
import { CommandesComponent } from './secure/pages/commandes/commandes.component';
import { HeaderComponent } from './secure/components/header/header.component';


@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet,ClientsComponent,CommandesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
 
  title = 'ism-ecom';
 





  

}
