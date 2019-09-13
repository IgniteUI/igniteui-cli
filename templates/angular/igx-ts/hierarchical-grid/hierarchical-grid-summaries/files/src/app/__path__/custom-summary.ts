import { IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular';

export class CustomSummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
            {
                key: 'min',
                label: 'Min',
                summaryResult: IgxNumberSummaryOperand.min(data)
            },
            {
                key: 'max',
                label: 'Max',
                summaryResult: IgxNumberSummaryOperand.max(data)
            },
            {
                key: 'avg',
                label: 'Avg',
                summaryResult: IgxNumberSummaryOperand.average(data)
            });
        return result;
    }
}
