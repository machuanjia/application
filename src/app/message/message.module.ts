import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { MessageTocComponent } from './toc/toc.component';
import { AppSharedModule } from '../app-shared.module';
import { MessageChatComponent } from './chat/chat.component';
import { MessageRoutingModule } from './message.router';

@NgModule({
    imports: [
        AppSharedModule,
        MessageRoutingModule
    ],
    declarations: [
        MessageComponent,
        MessageTocComponent,
        MessageChatComponent
    ],
    entryComponents: [
    ],
    exports: [
        MessageComponent,
        MessageTocComponent,
        MessageChatComponent
    ],
    providers: [
    ]
})
export class MessageModule {
    constructor() {
    }
}
