import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router){

  }
  onLoadView() {
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
           this.router.navigate([`/commandes/all`])
    })
  }

}
