import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(
      public router: Router,
      public toastr: ToastrService,
      private authService: AuthService
    ) {}

    ngOnInit() {}

    register(form: NgForm) {
      this.authService.register(form.value.username, form.value.email, form.value.password).subscribe(
        data => {
          console.log(data);
          if(data["error"]){
            this.toastr.error(data["error"], 'Oops!');
          }else{
            this.toastr.success(data["message"], 'Success!');
            this.router.navigate(['/login']);
          }
        });
    }
}
