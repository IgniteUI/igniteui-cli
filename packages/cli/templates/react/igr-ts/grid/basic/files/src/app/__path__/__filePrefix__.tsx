import style from './style.module.css';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

import data from './data';

export default function $(ClassName)() {
  const title = '$(name)';

  return (
    <div className={style.page}>
      <p className={style.title}>{title}</p>
      <p className={style.subtitle}>
        IgrGrid component with auto generated columns and local data.<br />
        You can read more about configuring the IgrGrid component in the&nbsp;
        <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/grids/data-grid.html" target="_blank">
          official documentation
        </a>.
      </p>
      <div className={style.grid}>
        <IgrGrid data={data} height="600px" width="100%">
          <IgrColumn
            field="ProductID"
            header="Product ID"
            dataType="number">
          </IgrColumn>
          <IgrColumn
            field="ProductName"
            header="Product Name"
            dataType="string">
          </IgrColumn>
          <IgrColumn
            field="QuantityPerUnit"
            header="Quantity Per Unit"
            dataType="string">
          </IgrColumn>
          <IgrColumn
            field="UnitsInStock"
            header="Units In Stock"
            dataType="number">
          </IgrColumn>
          <IgrColumn
            field="OrderDate"
            header="Order Date"
            dataType="date">
          </IgrColumn>
        </IgrGrid>
      </div>
    </div>
  );
}
