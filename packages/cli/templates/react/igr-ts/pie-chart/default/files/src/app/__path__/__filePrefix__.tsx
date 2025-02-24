import { useEffect, useRef, useState } from 'react';
import { IgrPieChartModule } from 'igniteui-react-charts';
import { IgrPieChart } from 'igniteui-react-charts';
import { IgrItemLegend } from 'igniteui-react-charts';
import { IgrItemLegendModule } from 'igniteui-react-charts';
import style from './style.module.css';

IgrPieChartModule.register();
IgrItemLegendModule.register();

const data: any = [
  { MarketShare: 30, Company: "Google", },
  { MarketShare: 15, Company: "Microsoft", },
  { MarketShare: 30, Company: "Apple", },
  { MarketShare: 15, Company: "Samsung", },
  { MarketShare: 10, Company: "Other", },
];

export default function $(ClassName)() {
  const title = 'Pie Chart';
  const [chartData, setChartData] = useState([]);
  const legendRef: any = useRef();
  const chartRef: any = useRef();

  useEffect(() => {
    setChartData(data);
  }, []);

  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      <div>
        Read more on the&nbsp;
        <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/piechart.html">
          official documentation page
        </a>
      </div>
      <div className={style.container}>
        <div className={style.legend}>
          <IgrItemLegend ref={legendRef} />
        </div>
        <div className={style.chart}>
          <IgrPieChart dataSource={chartData}
            labelMemberPath="Company"
            valueMemberPath="MarketShare"
            width="500px"
            height="500px"
            ref={chartRef}
            legendLabelMemberPath="Label"
            legend={legendRef.current}
          />
        </div>
      </div>
    </div>
  )
}
