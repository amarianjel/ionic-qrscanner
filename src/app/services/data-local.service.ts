import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

import { Browser } from '@capacitor/browser';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardados: Registro[] = [];


  constructor( private storage: Storage, private navCtrl: NavController ) {
    this.cargarStorage();
  }

  async guardarRegistro( format: string, text: string ){

    await this.cargarStorage();
    
    const nuevoRegistro = new Registro( format, text );
    this.guardados.unshift( nuevoRegistro );

    console.log(this.guardados);
    this.storage.set('registros', this.guardados);

    this.abrirRegistro( nuevoRegistro );
  }

  async cargarStorage() {
    // README: Funcion que da problemas cuando inicia la app, pero se soluciono con un try catch
    try {
      await this.storage.create();
      this.guardados = await this.storage.get('registros') || [];
    } catch (error) {
      console.error('Error al cargar datos desde el almacenamiento:', error);
      this.guardados = [];
    }
  }

  async abrirRegistro( registro: Registro ) {

    this.navCtrl.navigateForward('/tabs/tab2');

    switch ( registro.type ) {

      case 'http':
        await Browser.open({ 
          url: registro.text, 
          windowName: '_system' 
        })
        break;

      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${ registro.text }`); 
        break;

    }
  }
}
