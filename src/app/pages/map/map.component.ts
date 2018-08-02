import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  title = 'My first AGM project';
  lat = 63.4332981;
  lng = 10.3951055;

  constructor(
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
