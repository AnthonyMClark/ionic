import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'new-person-modal.html'
})
export class NewPersonPage { 
    items: FirebaseListObservable<any[]>;
    firstName: string;
    lastName: string;
    isAdded: boolean = false;
    constructor(af: AngularFire, public view: ViewController){
        this.items = af.database.list('/employees');
    }
    addNewPlayer(firstName: string, lastName: string){
        this.items.push({firstName: firstName, lastName: lastName});
        this.isAdded = true;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    dismiss() {
        this.view.dismiss() //close the modal
    }
}
class Person {
    firstName: string;
    lastName: string;
}
