import React from 'react';
import style from './style.module.css';
import { IgrDataGridModule  } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';

import data from './data';

IgrDataGridModule.register();

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
					<IgrDataGrid
						height="100%"
						autoGenerateColumns="false"
						dataSource={data}>
						<IgrNumericColumn field="ProductID" headerText="Product ID" />
						<IgrTextColumn field="ProductName" headerText="Product Name" />
						<IgrTextColumn field="QuantityPerUnit" headerText="Quantity Per Unit" />
						<IgrNumericColumn field="UnitsInStock" headerText="Units In Stock" />
						<IgrDateTimeColumn field="OrderDate" headerText="Order Date" />
					</IgrDataGrid>
				</div>
				<div className={style.grid}>
					<IgrDataGrid
						height="100%"
						width="100%"
						autoGenerateColumns="true"
						dataSource={data} />
				</div>
			</div>
		</div>
	)
}
