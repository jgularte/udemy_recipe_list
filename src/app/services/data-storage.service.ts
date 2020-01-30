import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from './recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(`${environment.firebase.protocol}://${environment.firebase.baseUrl}/recipes.json`, recipes)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://recipe-book-backend-6e8e9.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
          return recipes.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
          });
        }),
        tap(recipes => {
          return this.recipeService.setRecipes(recipes);
        })
      );
  }
}
