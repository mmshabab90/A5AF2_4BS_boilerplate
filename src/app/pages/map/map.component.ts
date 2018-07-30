import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  title = 'My first AGM project';
  lat = 63.4332981;
  lng = 10.3951055;

  constructor() { }

  ngOnInit() {
  }

}
