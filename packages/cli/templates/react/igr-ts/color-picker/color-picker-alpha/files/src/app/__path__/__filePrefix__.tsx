import style from './style.module.css';
import { IgrColorPicker } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const swatches = ['rgba(0, 0, 0, 0.5)', 'rgba(255, 255, 255, 0.5)', '#4a6fa5', '#a5644a'];

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Color Picker</h1>
      <div className={style.container}>
        <IgrColorPicker
          label="Overlay color"
          mode="input"
          format="rgb"
          showAlpha={true}
          value="rgba(74, 111, 165, 0.6)"
          swatches={swatches}
        />
      </div>
    </div>
  );
}
