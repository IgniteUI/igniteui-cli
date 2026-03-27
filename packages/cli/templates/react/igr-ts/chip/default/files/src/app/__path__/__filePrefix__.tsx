import style from './style.module.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Chip</h1>
      <div className={style.container}>
        <IgrChip selectable={true} removable={true}>Chip Content</IgrChip>
      </div>
    </div>
  );
}
