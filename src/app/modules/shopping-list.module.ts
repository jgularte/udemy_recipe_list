import {NgModule} from '@angular/core';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {ShoppingEditComponent} from '../shopping-list/shopping-edit/shopping-edit.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  exports: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ShoppingListModule {}
