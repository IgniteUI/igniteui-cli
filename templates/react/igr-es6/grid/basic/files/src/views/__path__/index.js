import React, { Component } from 'react';
import { IgrLiveGridModule } from 'igniteui-react-grids/ES5/igr-live-grid-module';
import { IgrLiveGrid } from 'igniteui-react-grids/ES5/igr-live-grid';
import { IgrNumericColumn } from 'igniteui-react-grids/ES5/igr-numeric-column';
import { IgrTextColumn } from 'igniteui-react-grids/ES5/igr-text-column';
import { IgrDateTimeColumn } from 'igniteui-react-grids/ES5/igr-date-time-column';

import data from './data';

IgrLiveGridModule.register();

export default class $(ClassName) extends Component { 
  state = { 
  }

  render () {
    this.data = data;
    return (
      <IgrLiveGrid
        height="100%"
        width="100%"
        autoGenerateColumns="false"
        dataSource={this.data}>
        <IgrNumericColumn propertyPath="ProductID" headerText="Product ID"/>
        <IgrTextColumn propertyPath="ProductName" headerText="Product Name"/>
        <IgrTextColumn propertyPath="QuantityPerUnit" headerText="Quantity Per Unit"/>
        <IgrNumericColumn propertyPath="UnitsInStock" headerText="Units In Stock"/>
        <IgrDateTimeColumn propertyPath="OrderDate" headerText="Order Date"/>
      </IgrLiveGrid>
    )
  }
}