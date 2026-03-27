import style from './style.module.css';
import { IgrIcon } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Icon</h1>
      <div className={style.container}>
        <div>
          <label>Home icon: </label>
          <IgrIcon name="home" collection="default" size="large" />
        </div>
        <div>
          <label>Search icon: </label>
          <IgrIcon name="search" collection="default" size="large" />
        </div>
      </div>
    </div>
  );
}
