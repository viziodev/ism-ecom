import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet,ClientsComponent,CommandesComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
   
  }
  title = 'ism-ecom';
 





  

}
