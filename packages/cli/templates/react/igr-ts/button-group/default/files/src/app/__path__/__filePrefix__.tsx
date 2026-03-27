import style from './style.module.css';
import { IgrButtonGroup, IgrToggleButton } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Button Group</h1>
      <div className={style.container}>
        <IgrButtonGroup>
          <IgrToggleButton value="left"><span>Left</span></IgrToggleButton>
          <IgrToggleButton value="center"><span>Center</span></IgrToggleButton>
          <IgrToggleButton value="right"><span>Right</span></IgrToggleButton>
        </IgrButtonGroup>
      </div>
    </div>
  );
}
