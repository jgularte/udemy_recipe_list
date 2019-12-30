import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import {RecipeService} from '../../recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.recipe = this.recipeService.getRecipes()[0];
      }
    );
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
