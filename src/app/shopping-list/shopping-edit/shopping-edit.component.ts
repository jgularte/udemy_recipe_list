import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';

import {Ingredient} from '../../common/models/ingredient.model';
import {ShoppingListService} from '../../services/shopping-list.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css', '../../app.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editSubscription: Subscription;
  deleteSubscription: Subscription;

  shoppingListForm: FormGroup;
  editItemIndex: number;
  editMode = false;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.editSubscription = this.shoppingListService.editingItem
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editItemIndex = index;
          this.editItem = this.shoppingListService.getIngredient(this.editItemIndex);
          this.shoppingListForm.setValue(
            {
              ingredient: this.editItem.name,
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

    this.initForm();
  }

  initForm() {

    this.shoppingListForm = new FormGroup({
      'ingredient': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required)
    });


  }

  onAddItem() {
    if (this.editMode) {
      this.shoppingListService.editIngredient(
        this.editItemIndex,
        this.shoppingListForm.value['ingredient'],
        this.shoppingListForm.value['quantity']
      );
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(
        new Ingredient(this.shoppingListForm.value['ingredient'], this.shoppingListForm.value['quantity'])
      );
    }

    this.shoppingListForm.reset();
  }

  clearEntry() {
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  ngOnDestroy() {
    this.deleteSubscription.unsubscribe();
    this.editSubscription.unsubscribe();
  }
}

