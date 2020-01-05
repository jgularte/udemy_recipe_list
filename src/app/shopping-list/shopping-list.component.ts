import { Component, OnInit } from '@angular/core';

import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  getIngredients() {
    return this.shoppingListService.getIngredients();
  }

  deleteIngredient(index: number) {
    this.shoppingListService.deleteIngredient(index);
    this.shoppingListService.deletingItem.next(index);
  }

  onEditItem(index: number) {
    this.shoppingListService.editingItem.next(index);
  }
}
