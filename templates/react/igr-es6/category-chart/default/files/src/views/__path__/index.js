import React, { Component } from 'react';
import { IgrCategoryChartModule } from 'igniteui-react-charts/ES5/igr-category-chart-module';
import { IgrCategoryChart } from 'igniteui-react-charts/ES5/igr-category-chart';
import style from './style.css';

IgrCategoryChartModule.register();

var data = [
    { 'CountryName': 'China', 'Pop1995': 1216, 'Pop2005': 1297, 'Pop2015': 1361, 'Pop2025': 1394 },
    { 'CountryName': 'India', 'Pop1995': 920, 'Pop2005': 1090, 'Pop2015': 1251, 'Pop2025': 1396 },
    { 'CountryName': 'United States', 'Pop1995': 266, 'Pop2005': 295, 'Pop2015': 322, 'Pop2025': 351 },
    { 'CountryName': 'Indonesia', 'Pop1995': 197, 'Pop2005': 229, 'Pop2015': 256, 'Pop2025': 277 },
    { 'CountryName': 'Brazil', 'Pop1995': 161, 'Pop2005': 186, 'Pop2015': 204, 'Pop2025': 218 }
];

export default class $(ClassName) extends Component {
    title = 'Category Chart'
    state = {
        data: []
    }

    componentDidMount() {
        this.setState({ data });
    }

    render() {
        return (
            <div>
                <h1 className={style.title}>{this.title}</h1>
                <div>
                    Read more on the&nbsp;
                    <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/categorychart.html">
                        official documentation page
                    </a>
                </div>
                <div className={style.container}>
                    <IgrCategoryChart dataSource={this.state.data}
                        width="100%"
                        height="500px">
                    </IgrCategoryChart>
                </div>
            </div >
        )
    }
}