import style from './style.module.css';
import { IgrPivotGrid } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

import { DATA } from './data';

export default function $(ClassName)() {
  const title = '$(name)';

  const pivotConfiguration = {
    columns: [
      {
        memberName: 'Product',
        memberFunction: (data: any) => data.Product.Name,
        enabled: true
      }
    ],
    rows: [
      {
        memberName: 'Seller',
        memberFunction: (data: any) => data.Seller.Name,
        enabled: true
      }
    ],
    values: [
      {
        member: 'NumberOfUnits',
        aggregate: {
          aggregatorName: 'SUM',
          key: 'sum',
          label: 'Sum'
        },
        enabled: true
      }
    ],
    filters: null
  };

  return (
    <div className={style.page}>
      <p className={style.title}>{title}</p>
      <p className={style.subtitle}>
        Basic IgrPivotGrid component.<br />
        You can read more about configuring the IgrPivotGrid component in the&nbsp;
        <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/grids/pivot-grid/overview.html" target="_blank">
          official documentation
        </a>.
      </p>
      <div className={style.grid}>
        <IgrPivotGrid data={DATA} pivotConfiguration={pivotConfiguration} height="650px" width="100%" />
      </div>
    </div>
  );
}
