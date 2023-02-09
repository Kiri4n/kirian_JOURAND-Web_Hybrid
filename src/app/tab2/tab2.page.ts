import { Component } from '@angular/core';
import {ex2} from "../services/ex2.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public last5GeoLoc: ex2) {}

  async ngOnInit() {
    await this.last5GeoLoc.loadInfosGeo();
    await this.last5GeoLoc.getPosition();
  }

}
