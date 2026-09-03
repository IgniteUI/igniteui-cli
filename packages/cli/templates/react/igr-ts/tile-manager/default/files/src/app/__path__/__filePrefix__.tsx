import style from './style.module.css';
import { IgrTileManager, IgrTile } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Tile Manager</h1>
      <div className={style.container}>
        <IgrTileManager columnCount={3}>
          <IgrTile colSpan={1} rowSpan={1}>
            <span slot="title">Revenue</span>
            <p>$120,430</p>
          </IgrTile>
          <IgrTile colSpan={1} rowSpan={1}>
            <span slot="title">Active Users</span>
            <p>8,240</p>
          </IgrTile>
          <IgrTile colSpan={1} rowSpan={1}>
            <span slot="title">Support Tickets</span>
            <p>12</p>
          </IgrTile>
        </IgrTileManager>
      </div>
    </div>
  );
}
