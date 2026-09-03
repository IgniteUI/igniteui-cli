import style from './style.module.css';
import { IgrChat } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const messages = [
  { id: '1', text: 'Hi! How can I help you today?', sender: 'assistant', timestamp: new Date().toISOString() },
  { id: '2', text: 'Can you show me the Ignite UI for React chat component?', sender: 'user', timestamp: new Date().toISOString() },
  { id: '3', text: 'Absolutely — this is it!', sender: 'assistant', timestamp: new Date().toISOString() },
];

export default function $(ClassName)() {
  return (
    <div className={style.page}>
      <h1 className={style.title}>Chat</h1>
      <div className={style.container}>
        <IgrChat messages={messages} options={{ currentUserId: 'user' }} />
      </div>
    </div>
  );
}
