import {NgModule} from '@angular/core';
import {AuthComponent} from '../auth/auth.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared.module';
import {AuthRoutingModule} from './routing-modules/auth-routing.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule {}
