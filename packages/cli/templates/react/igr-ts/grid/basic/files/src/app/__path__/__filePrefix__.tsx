import style from './style.module.css';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

import { employeesData } from './data';

export default function $(ClassName)() {
  const title = '$(name)';

  return (
    <div className={style.page}>
      <p className={style.title}>{title}</p>
      <p className={style.subtitle}>
        IgrGrid component with auto generated columns and local data.<br />
        You can read more about configuring the IgrGrid component in the&nbsp;
        <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/grids/data-grid.html" target="_blank" rel="noopener noreferrer">
          official documentation
        </a>.
      </p>
      <div className={style.grid}>
        <IgrGrid data={employeesData} height="600px" width="100%">
          <IgrColumn
            field="EmployeeID"
            header="Employee ID"
            dataType="string">
          </IgrColumn>
          <IgrColumn
            field="FirstName"
            header="First Name"
            dataType="string">
          </IgrColumn>
          <IgrColumn
            field="LastName"
            header="Last Name"
            dataType="string">
          </IgrColumn>
          <IgrColumn
            field="Country"
            header="Country"
            dataType="string">
          </IgrColumn>
          <IgrColumn
            field="Age"
            header="Age"
            dataType="number">
          </IgrColumn>
          <IgrColumn
            field="RegistererDate"
            header="Registered Date"
            dataType="date">
          </IgrColumn>
          <IgrColumn
            field="IsActive"
            header="Active"
            dataType="boolean">
          </IgrColumn>
        </IgrGrid>
      </div>
    </div>
  );
}
