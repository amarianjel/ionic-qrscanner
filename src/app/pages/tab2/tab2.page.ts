import { Component, OnDestroy } from '@angular/core';
// import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
// import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{

  constructor(){}

    // // https://www.npmjs.com/package/angularx-qrcode
    // qrCodeString = 'This is a secret qr code message';
    // scannedResult: any;
    // content_visibility = '';
  
    // constructor(
    //   // private barcodeScanner: BarcodeScanner
    //   ) {}
  
    // // startScan() {
    // //   this.barcodeScanner.scan().then(barcodeData => {
    // //     console.log('Barcode data', barcodeData);
    // //     this.scannedResult = barcodeData?.text;
    // //    }).catch(err => {
    // //        console.log('Error', err);
    // //    });
    // // }
  
    // async checkPermission(): Promise<boolean | any> {
    //   try {
    //     // check or request permission
    //     const status = await BarcodeScanner.checkPermission({ force: true });
    //     if (status.granted) {
    //       // the user granted permission
    //       return true;
    //     }
    //     return false;
    //   } catch(e) {
    //     console.log(e);
    //   }
    // }
  
    // async startScan() {
    //   try {
    //     const permission = await this.checkPermission();
    //     if(!permission) {
    //       return;
    //     }
    //     await BarcodeScanner.hideBackground();
    //     document.querySelector('body')?.classList.add('scanner-active');
    //     this.content_visibility = 'hidden';
    //     const result = await BarcodeScanner.startScan();
    //     console.log(result);
    //     BarcodeScanner.showBackground();
    //     document.querySelector('body')?.classList.remove('scanner-active');
    //     this.content_visibility = '';
    //     if(result?.hasContent) {
    //       this.scannedResult = result.content;
    //       console.log(this.scannedResult);
    //     }
    //   } catch(e) {
    //     console.log(e);
    //     this.stopScan();
    //   }
    // }
  
    // stopScan() {
    //   BarcodeScanner.showBackground();
    //   BarcodeScanner.stopScan();
    //   document.querySelector('body')?.classList.remove('scanner-active');
    //   this.content_visibility = '';
    // }
  
    // ngOnDestroy(): void {
    //     this.stopScan();
    // }
}
