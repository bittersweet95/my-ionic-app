import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vessels=[];
  vesselName;
  constructor(public navCtrl: NavController, public http:HttpClient) {
    this.navCtrl.push('AddNewPage');
  }
  public ionViewWillEnter()
  {
    let url="http://localhost/app/index.php/api/fishingvessel/all_ship";
  this.http.get(url)
           .subscribe(
             (result:any) => {
               console.log(result);
               this.vessels = result;
             }
           );
  }
public loadData(vesselName){
 // this.vessels.push(vesselName);
  //this.vesselName = "";
  let url="http://localhost/app/index.php/api/fishingvessel/all_ship";
  this.http.get(url)
           .subscribe(
             (result:any) => {
               console.log(result);
               this.vessels = result;
             }
           );
}
public openNewVesselPage()
{
this.navCtrl.push('AddNewPage');
}
}