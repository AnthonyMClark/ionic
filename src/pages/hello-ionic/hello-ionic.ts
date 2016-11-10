import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { NewPersonPage } from './new-person-modal';
@Component({
  templateUrl: 'hello-ionic.html' //templates are now based on relative paths
  //no selectors because pages are loaded dynamically
})
export class HelloIonicPage {
  items: FirebaseListObservable<any[]>;
  item: Person;
  constructor(af: AngularFire, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.items = af.database.list('employees');
    console.log(this.items);
  }
  onSelect(event, item: Person) {
    this.navCtrl.push(ItemDetailsPage, {
      item
    });
  }
  addNewPerson() {
    let modal = this.modalCtrl.create(NewPersonPage, this.items );
    modal.present();
    modal.onDidDismiss(data => {
      console.log('Modal Data', data);
    });
  }
}
export class Person {
  firstName: string;
  lastName: string;
}