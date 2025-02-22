import { Component, OnInit } from '@angular/core';
import { Entity } from '../../../models';
import { AppUtil } from '../../../shared/utils/app.util';

@Component({
  selector: 'app-list-entity',
  templateUrl: './list-entity.component.html',
  styleUrls: ['./list-entity.component.scss'],
})
export class ListEntityComponent implements OnInit {

  entityList: Entity[] = [];

  constructor() {}

  ngOnInit() {}

  getStatusBg = (status: string) => AppUtil.getStatusBg(status);
}
