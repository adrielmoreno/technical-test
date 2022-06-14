import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CrudApiService } from 'src/app/services/crud-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formSignup: FormGroup;
  idUser: string;
  regiEdit: string = '';
  private susb!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private apiCrud: CrudApiService
  ) {
    this.formSignup = this.formBuilder.group({})
    this.idUser = this.activeRoute.snapshot.params['userID'];
  }

  ngOnInit(): void {
    this.regiEdit = !this.idUser ? 'Registro' : 'Editar Usuario';
    this.formSignup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
    });

    // charger form if id exits
    if (this.idUser) {
      this.susb = this.apiCrud.getUser(this.idUser).subscribe(res => {
        this.formSignup.patchValue({
          email: res.email,
          name: res.name,
          surname: res.surname
        })
      })
    }

  }


  onSignup(): void {
    if (this.idUser) {
      this.apiCrud.updateUser(this.idUser, this.formSignup.value).subscribe(res => {
        this.router.navigateByUrl('/users')
      })
    } else {
      this.authService.signUp(this.formSignup.value).subscribe(res => {
        this.router.navigateByUrl('/auth/login')
      })
    }
  }
}
