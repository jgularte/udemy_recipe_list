import {NgModule} from '@angular/core';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {ShoppingEditComponent} from '../shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared.module';
import {ShoppingListRoutingModule} from './routing-modules/shopping-list-routing.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    FormsModule,
    ShoppingListRoutingModule,
    SharedModule
  ]
})
export class ShoppingListModule {}
