import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes =
  [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'auth', loadChildren: () => import('./auth.module').then(module => module.AuthModule)},
    { path: 'recipes', loadChildren: () => import('./recipes.module').then(module => module.RecipesModule)},
    { path: 'shopping-list', loadChildren: () => import('./shopping-list.module').then(module => module.ShoppingListModule)}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
