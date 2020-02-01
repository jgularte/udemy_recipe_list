import {Component, OnDestroy, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from '../../services/recipe.service';
import {Subscription} from 'rxjs';
import {DataStorageService} from '../../services/data-storage.service';
import {LoggingService} from '../../services/logging-service.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css', '../../app.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSub: Subscription;

  constructor(private recipeService: RecipeService,
              private dataStorageService: DataStorageService,
              private loggingService: LoggingService) { }

  ngOnInit() {
    this.recipeSub = this.recipeService.recipesChanges
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );

    this.dataStorageService.fetchRecipes().subscribe();
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }
}
