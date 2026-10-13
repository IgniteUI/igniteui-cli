import style from './style.module.css';
import { IgrBreadcrumbs, IgrBreadcrumb } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Breadcrumbs</h1>
      <div className={style.container}>
        <nav aria-label="Breadcrumb">
          <IgrBreadcrumbs>
            <IgrBreadcrumb><a href="#">Home</a></IgrBreadcrumb>
            <IgrBreadcrumb><a href="#">Products</a></IgrBreadcrumb>
            <IgrBreadcrumb current={true}><a href="#">Ignite UI for React</a></IgrBreadcrumb>
          </IgrBreadcrumbs>
        </nav>
      </div>
    </div>
  );
}
