import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from '../../auth/auth.component';
import {NgModule} from '@angular/core';

const routes: Routes =
  [
    { path: 'auth', component: AuthComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
