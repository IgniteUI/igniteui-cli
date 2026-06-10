import style from './style.module.css';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

import { EMPLOYEE_DATA } from './data';

export default function $(ClassName)() {
  const title = '$(name)';

  return (
    <div className={style.page}>
      <p className={style.title}>{title}</p>
      <p className={style.subtitle}>
        IgrTreeGrid component displaying hierarchical data using a child collection.<br />
        You can read more about configuring the IgrTreeGrid component in the&nbsp;
        <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/grids/tree-grid/overview.html" target="_blank">
          official documentation
        </a>.
      </p>
      <div className={style.grid}>
        <IgrTreeGrid data={EMPLOYEE_DATA} primaryKey="ID" childDataKey="Employees" autoGenerate={false} height="650px" width="100%">
          <IgrColumn field="Name" dataType="string" />
          <IgrColumn field="Location" dataType="string" />
          <IgrColumn field="HireDate" header="Hire Date" dataType="date" />
          <IgrColumn field="Age" dataType="number" />
        </IgrTreeGrid>
      </div>
    </div>
  );
}
