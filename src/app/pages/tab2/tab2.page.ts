import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( private alertController: AlertController){}

  async startScanner(){
    const result = await BarcodeScanner.startScan();
    console.log("~file: tab2.page.ts ~ line 16 ~ Tab2 ~ startScanner ~ result", result)
  }

  async checkPermission(){
    return new Promise(async ( resolve, reject ) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      
      if( status.granted ){
        resolve( true );
      }else if( status.denied ){
        const alert = await this.alertController.create({
          header: 'No hay permiso',
          message:'Debes darle el permiso para usar la cámara.',
          buttons:[{
            text: 'No',
            role:"cancel"
          },{
            text: 'Abrir Configuracion',
            handler: () => {
              resolve(false);
              BarcodeScanner.openAppSettings();
            }
          }]
        });

        await alert.present();
      }else{
        resolve(false);
      }
    })



  }

}
