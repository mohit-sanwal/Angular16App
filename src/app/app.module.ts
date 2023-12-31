import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/Forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {ErrorComponent} from './error/error.component';
import {SuccessComponent} from './success/success.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { TestDirectivesComponent } from './test-directives/test-directives.component';
import {appBasicHighlightDirective} from './custom-atrribut-directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './custom-atrribut-directive/better-highlight/better-highlight.directive';
import {UnlessDirective} from './custom-structural-directive/unless/unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessComponent,
    ErrorComponent,
    CockpitComponent,
    ServerElementComponent,
    TestDirectivesComponent,
    appBasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
