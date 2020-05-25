import { NgModule } from '@angular/core';
import { EdiCarSharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [EdiCarSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
  exports: [EdiCarSharedLibsModule, FindLanguageFromKeyPipe, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
})
export class EdiCarSharedModule {}
