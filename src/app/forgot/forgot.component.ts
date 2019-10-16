import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.scss'],
    animations: [routerTransition()]
})
export class ForgotComponent implements OnInit {
    constructor(
      public router: Router,
      public toastr: ToastrService,
      private authService: AuthService
    ) {}

    ngOnInit() {}

    forgot(form: NgForm) {
      console.log(form.value.email);
      this.authService.forgot(form.value.email).subscribe(
        data => {
          console.log(data);
          if(data["error"]){
            //this.toastr.error(data["error"], 'Oops!');
            this.toastr.success("Email sent! Please check your email box.", '');
          }else{
            this.toastr.success(data["message"], 'Success!');
            this.router.navigate(['/login']);
          }
        });
    }
}
