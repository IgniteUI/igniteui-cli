import style from './style.module.css';
import { IgrAvatar, IgrList, IgrListItem, IgrVirtualScroll, type VirtualScrollItemContext } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface Employee {
  name: string;
  email: string;
}

const employees: Employee[] = Array.from({ length: 1000 }, (_, i) => ({
  name: `Employee ${i + 1}`,
  email: `employee${i + 1}@example.com`,
}));

const itemTemplate = (ctx: VirtualScrollItemContext<Employee>) => (
  <IgrListItem>
    <IgrAvatar slot="start" shape="circle" initials={ctx.value.name.slice(0, 2)} />
    <span slot="title">{ctx.value.name}</span>
    <span slot="subtitle">{ctx.value.email}</span>
  </IgrListItem>
);

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Virtual Scroll</h1>
      <div className={style.container}>
        <IgrList className={style.list}>
          <IgrVirtualScroll className={style.scroll} data={employees} itemTemplate={itemTemplate} />
        </IgrList>
      </div>
    </div>
  );
}
