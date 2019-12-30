import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes/recipes.component';

const routes: Routes =
  [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent, children:
        [
          {path: 'detail/:name', component: RecipeDetailComponent }
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
