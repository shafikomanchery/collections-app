import { Component, OnInit } from '@angular/core';
import { Entity } from '../../../models';
import { AppUtil } from '../../../shared/utils/app.util';

@Component({
  selector: 'app-view-entity',
  templateUrl: './view-entity.component.html',
  styleUrls: ['./view-entity.component.scss'],
})
export class ViewEntityComponent implements OnInit {

  entity!: Entity;

  constructor() {}

  ngOnInit() {}
  
  getStatusBg = (status: string) => AppUtil.getStatusBg(status);
}
