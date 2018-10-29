import { NgModule } from '@angular/core';
import { NgxAkshayInputWhiteSpaceValidationComponent } from './ngx-akshay-input-white-space-validation.component';
import { WhiteSpaceValidatorDirective } from './white-space-validator.directive';

@NgModule({
   imports: [],
   declarations: [
      NgxAkshayInputWhiteSpaceValidationComponent,
      WhiteSpaceValidatorDirective
   ],
   exports: [
      NgxAkshayInputWhiteSpaceValidationComponent
   ]
})
export class NgxAkshayInputWhiteSpaceValidationModule { }
