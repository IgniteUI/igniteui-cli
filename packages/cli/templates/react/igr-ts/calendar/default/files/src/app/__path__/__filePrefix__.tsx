import style from './style.module.css';
import { IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Calendar</h1>
      <div className={style.container}>
        <IgrCalendar weekStart="monday" />
      </div>
    </div>
  );
}
