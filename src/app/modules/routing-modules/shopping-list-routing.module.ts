import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from '../../shopping-list/shopping-list.component';
import {NgModule} from '@angular/core';

const routes: Routes =
  [
    { path: '', component: ShoppingListComponent },
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
