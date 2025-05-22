import style from './style.module.css';
import 'igniteui-react-grids/grids';
import { IgrGridModule, IgrGrid, IgrColumn } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css'

import data from './data';

IgrGridModule.register();

export default function $(ClassName)() {
  const title = 'Grid';

  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      <div>
        Read more on the&nbsp;
        <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/grid.html">
          official documentation page
        </a>
      </div>
      <div className={style.container}>
        <div className={style.grid}>
          <IgrGrid autoGenerate={false} data={data}>
            <IgrColumn
              field="ProductID"
              header="Product ID"
              dataType="Number">
            </IgrColumn>
            <IgrColumn
              field="ProductName"
              header="Product Name"
              dataType="String">
            </IgrColumn>
            <IgrColumn
              field="QuantityPerUnit"
              header="Quantity Per Unit"
              dataType="String">
            </IgrColumn>
            <IgrColumn
              field="UnitsInStock"
              header="Units In Stock"
              dataType="Number">
            </IgrColumn>
            <IgrColumn
              field="OrderDate"
              header="Order Date"
              dataType="Date">
            </IgrColumn>
          </IgrGrid>
        </div>
        <div className={style.grid}>
          <IgrGrid autoGenerate={true} data={data} />
        </div>
      </div>
    </div>
  );
}
