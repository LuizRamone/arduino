import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Serial } from '@ionic-native/serial';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private serial: Serial) {
    this.serial.requestPermission().then(() => {
      this.serial.open({
        baudRate: 9600,
        dataBits: 8,
        stopBits: 1,
        parity: 0,
        dtr: false,
        rts: true,
        sleepOnPause: false
      }).then(() => {  
        serial.read().then((buffer) => {
    
          alert(buffer);
        });
        alert('Serial connection opened');
      });
    }).catch((error: any) => console.log(error));

  }

}
