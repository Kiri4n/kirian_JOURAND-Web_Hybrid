import {Injectable} from "@angular/core";
import {Device, DeviceInfo} from "@capacitor/device";

@Injectable({
  providedIn: 'root',
})

export class ex1 {
  public info?:DeviceInfo;

  async loadDeviceInfo(){
    this.info = await Device.getInfo();
  };
}
