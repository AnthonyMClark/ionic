import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: 'hello-ionic.html' //templates are now based on relative paths
  //no selectors because pages are loaded dynamically
})
export class HelloIonicPage {
items: FirebaseListObservable<any[]>;
  item: Person;
  constructor(af: AngularFire) {
    this.items = af.database.list('employees');
    console.log(this.items);
  }
}
export class Person {
  firstName: string;
  lastName: string;
}