import {NgModule} from '@angular/core';
import {RecipesComponent} from '../recipes/recipes.component';
import {RecipeListComponent} from '../recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from '../recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from '../recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipeStartComponent} from '../recipes/recipe-start/recipe-start.component';
import {RecipesEditComponent} from '../recipes/recipes-edit/recipes-edit.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared.module';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipesEditComponent,
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipesEditComponent,
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RecipesModule {

}
