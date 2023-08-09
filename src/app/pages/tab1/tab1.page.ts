import { Component } from '@angular/core';
import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  public inProcess: boolean = false;

  constructor( private alertCtrl: AlertController, private dataLocal: DataLocalService ) { }

  ionViewWillLeave() {
    console.log('ionViewWillLeave ');
    window.document.querySelector('body')?.classList.remove('scanner-active');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
    BarcodeScanner.stopScan();
  }

  async scan() {


    

    this.inProcess = true;
    // Este es lo importante!
    window.document.querySelector('body')?.classList.add('scanner-active');
    console.log("Entrooooo web")
    // Comprobar el permiso de la cámara
    // Este es solo un ejemplo simple, mira las mejores comprobaciones a continuación
    await BarcodeScanner.checkPermission({ force: true });
    // hacer transparente el fondo de WebView
    // nota: si está utilizando ionic, esto podría no ser suficiente, verifique a continuación
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE] }); // start scanning and wait for a result
    // if the result has content
    if (result.hasContent) {
      console.log('BarcoData', result.content); // registrar el contenido escaneado sin procesar
      //this.stopScan()
      this.presentAlert();
    }
  }

  stopScan(){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: '¡Excelente!',
      subHeader: 'La asistencia se registró correctamente',
      message: 'La asistencia se guardó correctamente',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
            this.inProcess = false;
            
          },
        },
      ],
      mode: 'ios',
      translucent: true,
      animated: true
    });
    await alert.present();
  }
}