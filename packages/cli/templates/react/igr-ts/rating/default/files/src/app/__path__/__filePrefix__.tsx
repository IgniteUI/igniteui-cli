import style from './style.module.css';
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Rating</h1>
      <div className={style.container}>
        <IgrRating value={3.5} max={5} />
      </div>
    </div>
  );
}
