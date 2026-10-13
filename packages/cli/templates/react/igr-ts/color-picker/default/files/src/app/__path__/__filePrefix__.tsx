import style from './style.module.css';
import { IgrColorPicker } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const swatches = ['#4a6fa5', '#6b8f71', '#a5644a', '#8a4fbe', '#c94f4f'];

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Color Picker</h1>
      <div className={style.container}>
        <IgrColorPicker label="Brand color" value="#4a6fa5" swatches={swatches} />
      </div>
    </div>
  );
}
