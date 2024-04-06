import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
export class AppComponent  {
 
  title = 'ism-ecom';
 





  

}
