import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserPage } from './user/user';
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  
  constructor(public navCtrl: NavController) {

  }

  onLoadUser(name: string){
    this.navCtrl.push(UserPage, {userName: name})
  }

}
