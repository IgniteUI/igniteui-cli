import style from './style.module.css';
import { IgrDateRangePicker } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Date Range Picker</h1>
      <div className={style.container}>
        <IgrDateRangePicker label="Choose a date range" />
      </div>
    </div>
  );
}
