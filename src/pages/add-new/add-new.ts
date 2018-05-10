import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new',
  templateUrl: 'add-new.html',
})
export class AddNewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpClient: HttpClient) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPage');
    let url="http://localhost/app/index.php/api/country/all";
    this.HttpClient.get(url)
                  .subscribe(
                    (result:any)=>{
                      console.log(result);
                    }

                  );
  }
  public add(vesselName,countryID){

  }
  public cancel(){
    this.navCtrl.pop();
  }
}
