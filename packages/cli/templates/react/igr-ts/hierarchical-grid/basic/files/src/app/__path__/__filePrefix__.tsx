import style from './style.module.css';
import { IgrHierarchicalGrid, IgrRowIsland, IgrColumn } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

import { ARTISTS } from './data';

export default function $(ClassName)() {
  const title = '$(name)';

  return (
    <div className={style.page}>
      <p className={style.title}>{title}</p>
      <p className={style.subtitle}>
        IgrHierarchicalGrid with basic configuration.<br />
        You can read more about configuring the IgrHierarchicalGrid component in the&nbsp;
        <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/grids/hierarchical-grid/overview.html" target="_blank" rel="noopener noreferrer">
          official documentation
        </a>.
      </p>
      <div className={style.grid}>
        <IgrHierarchicalGrid data={ARTISTS} primaryKey="Artist" autoGenerate={false} height="600px" width="100%">
          <IgrColumn field="Artist" dataType="string" />
          <IgrColumn field="HasGrammyAward" header="Has Grammy Award" dataType="boolean" />
          <IgrColumn field="Debut" dataType="number" />
          <IgrColumn field="GrammyNominations" header="Grammy Nominations" dataType="number" />
          <IgrColumn field="GrammyAwards" header="Grammy Awards" dataType="number" />
          <IgrRowIsland childDataKey="Albums" primaryKey="Album" autoGenerate={false}>
            <IgrColumn field="Album" dataType="string" />
            <IgrColumn field="LaunchDate" header="Launch Date" dataType="date" />
            <IgrColumn field="BillboardReview" header="Billboard Review" dataType="number" />
            <IgrColumn field="USBillboard200" header="US Billboard 200" dataType="number" />
            <IgrRowIsland childDataKey="Songs" primaryKey="TrackNumber" autoGenerate={false}>
              <IgrColumn field="TrackNumber" header="Track" dataType="string" />
              <IgrColumn field="Title" dataType="string" />
              <IgrColumn field="Released" dataType="string" />
              <IgrColumn field="Genre" dataType="string" />
            </IgrRowIsland>
          </IgrRowIsland>
        </IgrHierarchicalGrid>
      </div>
    </div>
  );
}
