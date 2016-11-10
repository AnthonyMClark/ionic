import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  item: FirebaseObjectObservable<Person>;
  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.item = af.database.object('/employees/' + this.selectedItem.$key)
  }
  update(firstName: string, lastName: string) {
    this.item.update({firstName: firstName, lastName: lastName});
    this.selectedItem.firstName = firstName;
    this.selectedItem.lastName = lastName;
  }
}
export class Person {
  firstName: string;
  lastName: string;
}