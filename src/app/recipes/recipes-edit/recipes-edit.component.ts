import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;

        if (this.editMode === true) {
          this.recipe = this.recipeService.getRecipe(this.id);
        } else {
          this.recipe = new Recipe(null, null, null, null);
        }
      }
    );
  }

}
