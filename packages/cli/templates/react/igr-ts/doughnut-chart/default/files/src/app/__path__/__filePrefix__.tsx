import { useEffect, useRef, useState } from 'react';
import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';
import { IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrItemLegend } from 'igniteui-react-charts';
import style from './style.module.css';

IgrItemLegendModule.register();

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();


const data: any = [
  { MarketShare: 30, Company: "Google", },
  { MarketShare: 15, Company: "Microsoft", },
  { MarketShare: 30, Company: "Apple", },
  { MarketShare: 15, Company: "Samsung", },
  { MarketShare: 10, Company: "Other", }
];

export default function $(ClassName)() {
  const title = 'Doughnut Chart';
  const [chartData, setChartData] = useState([]);
  const legendRef = useRef();
  const chartRef = useRef();

  useEffect(() => {
    setChartData(data);
  }, []);

  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      <div>
        Read more on the&nbsp;
        <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/doughnutchart.html">
          official documentation page
        </a>
      </div>
      <div className={style.container}>
        <div className={style.legend}>
          <IgrItemLegend ref={legendRef} />
        </div>
        <div className={style.chart}>
          <IgrDoughnutChart ref={chartRef}
            width="300px"
            height="300px">
            <IgrRingSeries
              name="ring1"
              dataSource={chartData}
              labelMemberPath="Company"
              valueMemberPath="MarketShare"
              legend={legendRef.current}
              />
          </IgrDoughnutChart>
        </div>
      </div>
    </div>
  )
}
