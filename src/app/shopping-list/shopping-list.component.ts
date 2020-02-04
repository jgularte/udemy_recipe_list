import {Component, OnInit} from '@angular/core';

import {ShoppingListService} from '../services/shopping-list.service';
import {trigger, state, style, transition, animate, keyframes, group} from '@angular/animations';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css', '../app.component.css'],
  animations: [
    trigger('addToList', [
      state('in', style({
        color: 'black',
        transform: 'translateX(0)'
      })),
      transition('void => *', group([
        animate(1000, keyframes([
          style({
            color: 'green',
            offset: 0
          }),
          style({
            color: 'black',
            offset: 0.9
          })
        ])),
        animate(1000, keyframes([
          style({
            opacity: 0,
            transform: 'translateX(-150px)',
            offset: 0
          }),
          style({
            opacity: 0.5,
            transform: 'translateX(-100px)',
            offset: 0.3
          }),
          style({
            opacity: 1,
            transform: 'translateX(-20px)',
            offset: 0.8
          }),
          style({
            opacity: 1,
            transform: 'translateX(0px)',
            offset: 1
          })
        ]))
      ])),
      transition('* => void', group([
        animate(1000, keyframes([
          style({
            color: 'black',
            offset: 0.2
          }),
          style({
            color: 'red',
            offset: .5
          })
        ])),
        animate(1000, keyframes([
          style({
            opacity: 1,
            transform: 'translateX(0px)',
            offset: 0
          }),
          style({
            opacity: 0.5,
            transform: 'translateX(20px)',
            offset: 0.3
          }),
          style({
            opacity: .2,
            transform: 'translateX(100px)',
            offset: 0.8
          }),
          style({
            opacity: 0,
            transform: 'translateX(150px)',
            offset: 1
          })
        ]))
      ]))
    ])
  ]
})
export class ShoppingListComponent implements OnInit {
  addList = 'in';

  constructor(private shoppingListService: ShoppingListService) {
  }

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
