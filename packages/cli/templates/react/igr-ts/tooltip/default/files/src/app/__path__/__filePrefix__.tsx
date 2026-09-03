import style from './style.module.css';
import { IgrTooltip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Tooltip</h1>
      <div className={style.container}>
        <button id="tooltip-anchor">Hover me</button>
        <IgrTooltip anchor="tooltip-anchor" message="This is a helpful tooltip message." open={true} />
      </div>
    </div>
  );
}
