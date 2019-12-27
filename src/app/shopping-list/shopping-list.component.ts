import { Component, OnInit } from '@angular/core';

import {ShoppingListService} from './shopping-list.service';
import {Ingredient} from '../common/ingredient.model';

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

  deleteIngredient(ingredient: Ingredient) {
    this.shoppingListService.deleteIngredient(ingredient);
  }
}
