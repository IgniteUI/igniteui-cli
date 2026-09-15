import { Component } from '@angular/core';
import { IgxChatComponent } from '<%=igxPackage%>/chat';
import type { IgcChatMessage } from 'igniteui-webcomponents';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.html',
  styleUrl: './<%=filePrefix%>.scss',
  imports: [IgxChatComponent],
})
export class <%=ClassName%> {
  public messages: IgcChatMessage[] = [
    { id: '1', sender: 'bot', text: 'Hello! How can I help you today?', timestamp: new Date().toISOString() },
    { id: '2', sender: 'user', text: 'Tell me more about the igx-chat component.', timestamp: new Date().toISOString() }
  ];
}
