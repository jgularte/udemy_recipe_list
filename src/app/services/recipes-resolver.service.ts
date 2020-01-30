import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { DataStorageService } from './data-storage.service';
import { RecipeService } from './recipe.service';
import { Injectable } from '@angular/core';
import {LoggingService} from './logging-service.service';

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService,
              private loggingService: LoggingService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if requested index is out of range
    this.dataStorageService.fetchRecipes().subscribe(
      ((recipes: Recipe[]) => {
        if (+route.paramMap.get('id') > this.recipeService.getRecipes().length - 1) {
          this.loggingService.warn('Requested recipe index is out of range. Routing back to home...');
          this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        }
      })
    );

    // todo figure out why the fuck this is necessary and where it is resolving the recipe array to
    if (this.recipeService.getRecipes().length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return this.recipeService.getRecipes();
    }
  }
}
