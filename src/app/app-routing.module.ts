import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipesEditComponent} from './recipes/recipes-edit/recipes-edit.component';
import {RecipesResolverService} from './recipes/recipes-resolver.service';

const routes: Routes =
  [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent, children:
        [
          {path: '', component: RecipeStartComponent },
          {path: 'new', component: RecipesEditComponent },
          {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
          {path: ':id/edit', component: RecipesEditComponent, resolve: [RecipesResolverService] }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
