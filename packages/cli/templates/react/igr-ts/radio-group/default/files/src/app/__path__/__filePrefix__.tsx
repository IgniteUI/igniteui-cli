import style from './style.module.css';
import { IgrRadioGroup, IgrRadio } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Radio Group</h1>
      <div className={style.container}>
        <IgrRadioGroup>
          <IgrRadio name="fruit" value="banana">Banana</IgrRadio>
          <IgrRadio name="fruit" value="orange">Orange</IgrRadio>
          <IgrRadio name="fruit" value="mango">Mango</IgrRadio>
        </IgrRadioGroup>
      </div>
    </div>
  );
}
