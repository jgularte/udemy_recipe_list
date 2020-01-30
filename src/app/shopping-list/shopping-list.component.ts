import { Component, OnInit } from '@angular/core';

import {ShoppingListService} from '../services/shopping-list.service';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(100))
    ])
  ]
})
export class ShoppingListComponent implements OnInit {
  state = 'normal';
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

  onAnimate() {
    if (this.state === 'normal') {
      this.state = 'highlighted';
    } else {
      this.state = 'normal';
    }
  }
}
