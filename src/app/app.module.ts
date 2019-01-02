import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { COMPONENTS, ENTRY_COMPONENTS, PIPES, PROVIDERS } from './components';
import { AppSharedModule } from './app-shared.module';
import { MessageModule } from './message/message.module';
import { appServices } from './services';

@NgModule({
  imports: [
    AppSharedModule,
    MessageModule
  ],
  declarations: [
    AppComponent,
    AppNavComponent,
    ...COMPONENTS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ],
  exports: [
    AppSharedModule,
    MessageModule
  ],
  providers: [
    ...appServices,
    ...PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
