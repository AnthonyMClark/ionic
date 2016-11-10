import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  templateUrl: 'hello-ionic.html' //templates are now based on relative paths
  //no selectors because pages are loaded dynamically
})
export class HelloIonicPage {
  items: FirebaseListObservable<any[]>;
  item: Person;
  constructor(af: AngularFire, public navCtrl: NavController, public navParams: NavParams) {
    this.items = af.database.list('employees');
    console.log(this.items);
  }
  onSelect(event, item: Person) {
    this.navCtrl.push(ItemDetailsPage, {
      item
    });
  }
}
export class Person {
  firstName: string;
  lastName: string;
}