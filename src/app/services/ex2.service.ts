import {Injectable} from "@angular/core";
import { Geolocation } from '@capacitor/geolocation';
import {GetResult, Preferences} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})

export class ex2 {
  public infosGeo:{latitude: number, longitude: number, save_at: string}[] = []

  async loadInfosGeo(){
    const prefrence: GetResult = await Preferences.get({key: 'infosGeo'});
    if (prefrence.value) {
      this.infosGeo = await JSON.parse(prefrence.value);
    }
  }

  async getPosition(){
    // await Geolocation.watchPosition({enableHighAccuracy: false, timeout: 5000, maximumAge: 0}, coordinates);
    const coordinates = await Geolocation.getCurrentPosition();

    if(this.infosGeo.length === 5) {
      this.infosGeo.pop();
    }
    const date = new Date();
    const date_format:string = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    this.infosGeo.unshift({latitude: coordinates.coords.latitude, longitude: coordinates.coords.longitude, save_at: date_format})
    await this.saveInfosGeo();
  }

  async saveInfosGeo(){
    await Preferences.set({
      key: 'infosGeo',
      value: JSON.stringify(this.infosGeo)
    })
  }
}
