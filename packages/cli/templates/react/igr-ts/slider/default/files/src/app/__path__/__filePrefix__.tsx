import style from './style.module.css';
import { IgrSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Slider</h1>
      <div className={style.container}>
        <IgrSlider min={0} max={100} value={50} primaryTicks={5} />
      </div>
    </div>
  );
}
