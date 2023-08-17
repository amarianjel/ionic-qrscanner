import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement> | any;
  newMap: GoogleMap | any;

  lat: number | any;
  lng: number | any;

  constructor( private route: ActivatedRoute ) { }

    ngOnInit() {

    let geo: any = this.route.snapshot.paramMap.get('geo');

    geo = geo.substr(4);
    geo = geo.split(',');

    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);

    console.log(this.lat, this.lng);
  }

  // ngAfterViewInit() { 
  //   this.createMap();
  // }
  
  //FIXME: Solucionar activar cuenta de maps
  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'map',
      element: this.mapRef.nativeElement,
      apiKey: environment.googleMapsApiKey,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }
}
