import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcChatComponent,
  type IgcChatMessage,
  type IgcChatOptions,
} from 'igniteui-webcomponents';

defineComponents(IgcChatComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  // host must have an explicit width - it's a flex item with no intrinsic size
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
  `;

  private options: IgcChatOptions = {
    currentUserId: 'me',
    headerText: 'Support Chat',
    inputPlaceholder: 'Type a message...',
  };

  private messages: IgcChatMessage[] = [
    {
      id: '1',
      sender: 'support',
      text: 'Hi! How can I help you today?',
      timestamp: Date.now().toString(),
    },
  ];

  render() {
    return html`
      <igc-chat
        style="--igc-chat-height: 480px;"
        .options=${this.options}
        .messages=${this.messages}
      ></igc-chat>
    `;
  }
}
