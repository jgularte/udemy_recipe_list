import { Injectable } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';

@Injectable({providedIn: 'root'})
export class LoggingService {

  debug(message: string) {
    console.log('DEBUG: ' + message);
  }

  printRecipes(recipes: Recipe[]) {
    console.log('Printing recipes: \n');
    console.log(recipes);
  }

  printRecipe(recipe: Recipe) {
    console.log('Printing single recipe \n');
    console.log(recipe);
  }

  info(message: string) {
    console.log('INFO: ' + message);
  }

  warn(message: string) {
    console.log('WARN: ' + message);
  }

  error(message: string) {
    console.log('ERROR: ' + message);
  }
}
