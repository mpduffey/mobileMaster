import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import {ObjectService} from '../../../app/services/object-service/objects.service';

@Component({
  templateUrl:  'build/pages/list/list.html',
  providers:    [ObjectService]
})
export class ListPage {
  _objectService: ObjectService;
  selectedItem: any;
  icons: string[];
  items = [];

  constructor(private nav: NavController, navParams: NavParams, _objectService: ObjectService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this._objectService = _objectService;
    this._objectService.getObjectsWithTags([4611,11051,14608]).subscribe(objects => {this.items = objects;})
  }

  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {item: item});
  }
}