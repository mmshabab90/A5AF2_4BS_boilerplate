import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AlarmListService} from '../../../services/alarm-list.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.scss']
})
export class AlarmListComponent implements OnInit {
  alarms: FirebaseListObservable<any[]>;
  alarm: FirebaseListObservable<any[]>;

  constructor(
    private alarmListService: AlarmListService,
  ) { }

  ngOnInit() {
    this.alarms = this.alarmListService.getAlarmList();
  }

}
