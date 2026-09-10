import style from './style.module.css';
import { IgrIcon } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Icon</h1>
      <div className={style.container}>
        <div>
          <label>Home icon: </label>
          <IgrIcon className={style.large} name="home" collection="default" />
        </div>
        <div>
          <label>Search icon: </label>
          <IgrIcon className={style.large} name="search" collection="default" />
        </div>
      </div>
    </div>
  );
}
