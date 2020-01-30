import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from '../../recipes/recipes.component';
import {AuthGuard} from '../../auth/auth.guard';
import {RecipeStartComponent} from '../../recipes/recipe-start/recipe-start.component';
import {RecipesEditComponent} from '../../recipes/recipes-edit/recipes-edit.component';
import {RecipeDetailComponent} from '../../recipes/recipe-detail/recipe-detail.component';
import {RecipesResolverService} from '../../services/recipes-resolver.service';
import {NgModule} from '@angular/core';

const routes: Routes =
  [
    { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard], children:
        [
          {path: '', component: RecipeStartComponent },
          {path: 'new', component: RecipesEditComponent },
          {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
          {path: ':id/edit', component: RecipesEditComponent, resolve: [RecipesResolverService] }
        ]
    },
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule {}
