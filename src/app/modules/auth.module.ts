import {NgModule} from '@angular/core';
import {AuthComponent} from '../auth/auth.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule {}
