import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import {ShoppingListService} from '../../services/shopping-list.service';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';
import {interval} from 'rxjs';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  toShopping() {
    for (let ing of this.recipe.ingredients) {
      this.shoppingListService.addIngredient(ing);
    }
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
  }
}
