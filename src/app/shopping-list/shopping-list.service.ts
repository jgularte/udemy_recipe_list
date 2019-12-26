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

}

