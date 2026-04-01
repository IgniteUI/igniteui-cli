import style from './style.module.css';
import { IgrTextarea } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Text Area</h1>
      <div className={style.container}>
        <IgrTextarea label="Leave your comment" />
      </div>
    </div>
  );
}
