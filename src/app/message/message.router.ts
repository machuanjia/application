import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message.component';
import { MessageChatComponent } from './chat/chat.component';

const messageRoutes: Routes = [
    {
        path: 'message',
        component: MessageComponent,
        children: [
          {
            path: 'chat',
            component: MessageChatComponent
          }
        ]
      }
];

@NgModule({
    imports: [
        RouterModule.forChild(messageRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MessageRoutingModule { }
