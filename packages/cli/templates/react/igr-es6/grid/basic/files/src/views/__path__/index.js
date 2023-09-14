import React, { Component } from 'react';
import style from './style.css';
import { IgrDataGridModule  } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';

import data from './data';

IgrDataGridModule.register();

export default class $(ClassName) extends Component {
	title = 'Grid';
	state = {
	}

	render() {
		this.data = data;
		return (
			<div>
				<h1 className={style.title}>{this.title}</h1>
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
						dataSource={this.data}>
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
						dataSource={this.data} />
				</div>
				</div>
			</div>
		)
	}
}