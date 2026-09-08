import style from './style.module.css';
import { IgrDateTimeInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Date Time Input</h1>
      <div className={style.container}>
        <IgrDateTimeInput label="Appointment date" inputFormat="MM/dd/yyyy" value={new Date(2026, 0, 15)} />
      </div>
    </div>
  );
}
