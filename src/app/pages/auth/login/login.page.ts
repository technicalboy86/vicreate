import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }

  // On Register button tap, dismiss login modal and open register modal
  async registerModal() {
    this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  login(form: NgForm) {
    // form.value.email = 'ommzitestingvi1@gmail.com';
    // form.value.password = '123456';
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        console.log(data);
        if(data.error){
          console.log(data.error);
          this.alertService.presentToast(data.error);
        }else{
          this.alertService.presentToast("Logged In");
          this.navCtrl.navigateRoot('/dashboard');
        }

        this.dismissLogin();
      });
  }

}
