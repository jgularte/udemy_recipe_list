import { Ingredient } from '../common/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {

  private ingredients: Ingredient[] = [];
  public editingItem = new Subject<number>();
  public deletingItem = new Subject<number>();

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  editIngredient(index, name, quantity) {
    this.ingredients[index].name = name;
    this.ingredients[index].quantity = quantity;
  }

  deleteIngredient(index: number) {
    if (index > -1) {
      this.ingredients.splice(index, 1);
    }
  }
}

