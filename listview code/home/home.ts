import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private apiurl = 'assets/data/testejson.json';
  country:any[]=[];
  data: Object [] = [];
  constructor(public navCtrl: NavController, public http: HttpClient) {
    console.log("Countries api");
    this.getcountry();
    this.getdata();
 
  }
  getdata(){
    return this.http.get(this.apiurl);
  
  }
  getcountry(){
    this.getdata().subscribe(data =>{
      console.log(data) 
      this.data = data;
    })

  }
}