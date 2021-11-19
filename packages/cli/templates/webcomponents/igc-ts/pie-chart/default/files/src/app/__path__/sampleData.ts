export class DataItem {
  public constructor(init: Partial<DataItem>) {
      Object.assign(this, init);
  }

  public marketShare: number = 0;
  public category: string = '';

}
export class Data extends Array<DataItem> {
  public constructor() {
      super();
      this.push(new DataItem(
      {
          marketShare: 37,
          category: `Cooling`
      }));
      this.push(new DataItem(
      {
          marketShare: 25,
          category: `Residential`
      }));
      this.push(new DataItem(
      {
          marketShare: 12,
          category: `Heating`
      }));
      this.push(new DataItem(
      {
          marketShare: 11,
          category: `Lighting`
      }));
      this.push(new DataItem(
      {
          marketShare: 15,
          category: `Other`
      }));
  }
}
