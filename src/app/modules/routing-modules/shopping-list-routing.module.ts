import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from '../../shopping-list/shopping-list.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from '../../auth/auth.guard';

const routes: Routes =
  [
    { path: '', canActivate: [AuthGuard], component: ShoppingListComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingListRoutingModule {}
