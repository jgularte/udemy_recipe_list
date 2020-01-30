import {NgModule} from '@angular/core';
import {AlertComponent} from '../common/alert/alert.component';
import {LoadingSpinnerComponent} from '../common/loading-spinner/loading-spinner.component';
import {DropdownDirective} from '../common/dropdown/dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    DropdownDirective,
    CommonModule
  ]
})
export class SharedModule {}
