import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CornataProvider } from "../../providers/cornata/cornata";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public cornata:CornataProvider) {

  }

	setDatabase(){
		this.cornata.setDatabase('cornata-db');
	}
}
