import style from './style.module.css';
import { IgrRangeSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Range Slider</h1>
      <div className={style.container}>
        <IgrRangeSlider lower={20} upper={80} min={0} max={100} primaryTicks={5} />
      </div>
    </div>
  );
}
