import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardados: Registro[] = [];


  constructor( private storage: Storage ) {}

  guardarRegistro( format: string, text: string ){
    
    const nuevoRegistro = new Registro( format, text );
    this.guardados.unshift( nuevoRegistro );

    console.log(this.guardados)
  }
}
