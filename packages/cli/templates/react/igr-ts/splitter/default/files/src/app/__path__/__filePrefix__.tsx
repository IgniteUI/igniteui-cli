import style from './style.module.css';
import { IgrSplitter } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div className={style.page}>
      <h1 className={style.title}>Splitter</h1>
      <IgrSplitter className={style.splitter}>
        <section slot="start" className={style.pane}>
          <h2>Overview</h2>
          <p>Resize the panes to explore the layout.</p>
        </section>
        <section slot="end" className={style.pane}>
          <h2>Details</h2>
          <p>Content stays organized in independently sized regions.</p>
        </section>
      </IgrSplitter>
    </div>
  );
}
