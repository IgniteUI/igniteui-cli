import style from './style.module.css';
import { IgrDatePicker } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Date Picker</h1>
      <div className={style.container}>
        <IgrDatePicker label="Choose a date" />
      </div>
    </div>
  );
}
