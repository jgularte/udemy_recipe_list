import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';

import { Ingredient } from '../../common/models/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editSubscription: Subscription;
  deleteSubscription: Subscription;

  editItemIndex: number;
  editMode = false;
  editItem: Ingredient;
  @ViewChild('f', {static: false}) slForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editSubscription = this.shoppingListService.editingItem
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editItemIndex = index;
          this.editItem = this.shoppingListService.getIngredient(this.editItemIndex);
          this.slForm.setValue(
            {
              name: this.editItem.name,
              quantity: this.editItem.quantity
            }
          );
        }
      );

    this.deleteSubscription = this.shoppingListService.deletingItem
      .subscribe(
        (index: number) => {
          if (this.editMode && (index === this.editItemIndex)) {
            this.editMode = false;
            this.editItemIndex = null;
            this.editItem = null;
          }
        }
      );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    if (this.editMode) {
      this.shoppingListService.editIngredient(this.editItemIndex, value.name, value.quantity);
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(new Ingredient(value.name, value.quantity));
    }
    this.slForm.resetForm();
  }

  clearEntry() {
    this.editMode = false;
    this.slForm.resetForm();
  }

  ngOnDestroy() {
    this.deleteSubscription.unsubscribe();
    this.editSubscription.unsubscribe();
  }
}

