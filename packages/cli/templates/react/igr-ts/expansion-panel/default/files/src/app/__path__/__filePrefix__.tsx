import style from './style.module.css';
import { IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Expansion Panel</h1>
      <div className={style.container}>
        <IgrExpansionPanel>
          <div slot="title">Expansion Panel Title</div>
          <p>This is the content of the expansion panel. Click the header to expand or collapse this section.</p>
        </IgrExpansionPanel>
      </div>
    </div>
  );
}
