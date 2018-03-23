import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { BackButtonService } from "../../services/backButton.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private backButtonService: BackButtonService,
              private platform: Platform) {
      platform.ready().then(() => {
        this.backButtonService.registerBackButtonAction(null);
      });
  }

  showToast(position: string,msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  login(username: HTMLInputElement, password: HTMLInputElement){
    if (username.value.length == 0) {
      this.showToast("top", "请输入账号");
    } else if (password.value.length == 0) {
      this.showToast("top", "请输入密码");
    } else {
      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
      this.navCtrl.push("DisplayPage");
    }

  }
}
