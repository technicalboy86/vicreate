import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
      public router: Router,
      public toastr: ToastrService,
      private authService: AuthService
    ) {}

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    login(form: NgForm) {
      console.log(form.value);
      // form.value.email = 'ommzitestingvi1@gmail.com';
      // form.value.password = '123456';
      if(form.value.email == '' || form.value.password ==''){
        //this.toastr.error("Please enter your email address and password", 'Oops!');
        return;
      }
      this.authService.login(form.value.email, form.value.password).subscribe(
        data => {
          console.log(data);
          if(data.error){
            console.log(data.error);
            this.toastr.error(data.error, 'Oops!');
          }else{
            this.toastr.success('Logged In!', 'Success!');
            this.router.navigate(['/dashboard']);
          }
        });
    }
}
