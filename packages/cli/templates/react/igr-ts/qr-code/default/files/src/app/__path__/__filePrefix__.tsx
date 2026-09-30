import style from './style.module.css';
import { IgrQrCode } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>QR Code</h1>
      <div className={style.container}>
        <IgrQrCode value="https://www.infragistics.com/products/ignite-ui-react" size={160} />
      </div>
    </div>
  );
}
