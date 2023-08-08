import { Component } from '@angular/core';
// import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // constructor(private barcodeScanner: BarcodeScanner) {}

  // scan() {
  //   this.barcodeScanner.scan().then((barcodeData) => {
  //     console.log('Resultado del escaneo:', barcodeData.text);
  //   }).catch((err) => {
  //     console.error('Error en el escaneo:', err);
  //   });
  // }

  // scan(){
  //   this.barcodeScanner.scan().then( barcodeScanner => {
  //     console.log("Barcode data", this.barcodeScanner);
  //   }).catch( err => {
  //     console.log('Error ', err);
  //   })
  // }

}
