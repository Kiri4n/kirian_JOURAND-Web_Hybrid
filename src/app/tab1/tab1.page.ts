import { Component } from '@angular/core';
import { Device } from '@capacitor/device';
import {ex1} from "../services/ex1.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deviceInfo: ex1) {}

  async ngOnInit() {
    await this.deviceInfo.loadDeviceInfo();
  }
}
