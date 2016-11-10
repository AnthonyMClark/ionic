import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { NewPersonPage } from '../pages/hello-ionic/new-person-modal';
import { AngularFireModule } from 'angularfire2';
//export the config & init firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCWk1dW20h55CMteAcr8SvktcUlAbXljew",
  authDomain: "fireback-36a45.firebaseapp.com",
  databaseURL: "https://fireback-36a45.firebaseio.com",
  storageBucket: "fireback-36a45.appspot.com",
  messagingSenderId: "644300535543"
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    NewPersonPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    NewPersonPage
  ],
  providers: []
})
export class AppModule {}

//Entry point for the app
//Root component is set as MyApp - app.component.ts. It's the first that will be loaded and is usually an empty shell for other components to lbe loaded into