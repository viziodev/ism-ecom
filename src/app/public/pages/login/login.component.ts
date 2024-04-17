import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RestResponse } from '../../../core/models/rest.response';
import { TokenResponse } from '../../../core/models/authentification';
import { AuthentificateService } from '../../../core/services/auth/authentificate.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthentificateService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    let data = this.form.getRawValue();
    this.authService.login(data).subscribe((res: RestResponse<TokenResponse>) => {
      if (res.statuts==200) {
        this.authService.isAuthentificated=true;
        this.authService.username=res.results.username
        this.authService.roles=res.results.roles
        localStorage.setItem("token",res.results.token)
        this.router.navigateByUrl('/client/catalogue');
      } else {
        this.authService.isAuthentificated=false;
         console.log("Error");
      }
    
     
        
    });
  }
}
