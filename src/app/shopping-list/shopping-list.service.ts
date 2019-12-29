import { Ingredient } from '../common/ingredient.model';

export class ShoppingListService {

  private ingredients: Ingredient[] = [];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  deleteIngredient(ingredient: Ingredient) {
    const index = this.ingredients.indexOf(ingredient, 0);
    if (index > -1) {
      this.ingredients.splice(index, 1);
    }
  }
}

