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

  constructor( private alertCtrl: AlertController, private dataLocal: DataLocalService) { }

  ionViewWillEnter() {
    //console.log('viewWillEnter');
  }
  
  ionViewDidEnter() {
    //console.log('viewDidEnter');
  }

  ionViewDidLeave() {
    //console.log('ionViewDidLeave');
    //BarcodeScanner.stopScan();
  }


  ionViewWillLeave() {
    //console.log('ionViewWillLeave ');
    window.document.querySelector('body')?.classList.remove('scanner-active');
  }

  async scan() {
    this.inProcess = true;
    /* README:  Este es lo importante 
    1-. Se abre un nuevo metodo
    2-. Verifico el permiso de la camára
    3-. hago transparente el fondo
    */
    window.document.querySelector('body')?.classList.add('scanner-active');
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.hideBackground();

    // README: Tomo el objeto
    const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE] }); // start scanning and wait for a result

    if (result.hasContent) {
      console.log('BarcoData', result.content); // registrar el contenido escaneado sin procesar
      this.dataLocal.guardarRegistro( result.format, result.content );
      //this.stopScan()
      this.presentAlert();
    }else{
      this.dataLocal.guardarRegistro( 'QRCode', 'https://fernando-herrera.com' );
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