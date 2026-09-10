import style from './style.module.css';
import { IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Toggle Button</h1>
      <div className={style.container}>
        <IgrToggleButton value="bold" selected={true}><span>Bold</span></IgrToggleButton>
        <IgrToggleButton value="italic"><span>Italic</span></IgrToggleButton>
        <IgrToggleButton value="underline"><span>Underline</span></IgrToggleButton>
      </div>
    </div>
  );
}
