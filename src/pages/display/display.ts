import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {BackButtonService} from "../../services/backButton.service";

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  @ViewChild('myDisplay') displayRef: DisplayPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public backButtonService: BackButtonService,
              private platform: Platform) {

    platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(this.displayRef);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

}
