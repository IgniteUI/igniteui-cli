import style from './style.module.css';
import { IgrDropdown, IgrDropdownItem, IgrButton } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Dropdown</h1>
      <div className={style.container}>
        <IgrDropdown>
          <IgrButton slot="target"><span>Options</span></IgrButton>
          <IgrDropdownItem><span>Option 1</span></IgrDropdownItem>
          <IgrDropdownItem><span>Option 2</span></IgrDropdownItem>
          <IgrDropdownItem><span>Option 3</span></IgrDropdownItem>
        </IgrDropdown>
      </div>
    </div>
  );
}
