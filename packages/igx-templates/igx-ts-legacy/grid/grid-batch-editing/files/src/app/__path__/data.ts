export interface Product {
  CategoryID: number;
  Discontinued: boolean;
  OrderDate: Date;
  ProductID: number;
  ProductName: string;
  QuantityPerUnit: string;
  ReorderLevel: number;
  SupplierID: number;
  UnitPrice: string;
  UnitsInStock: number;
  UnitsOnOrder: number;
}

export const data: Product[] = [
  {
    CategoryID: 1,
    Discontinued: false,
    OrderDate: new Date('2012-02-12'),
    ProductID: 1,
    ProductName: 'Chai',
    QuantityPerUnit: '10 boxes x 20 bags',
    ReorderLevel: 10,
    SupplierID: 1,
    UnitPrice: '18.0000',
    UnitsInStock: 39,
    UnitsOnOrder: 0
  }, {
    CategoryID: 1,
    Discontinued: false,
    OrderDate: new Date('2003-03-17'),
    ProductID: 2,
    ProductName: 'Chang',
    QuantityPerUnit: '24 - 12 oz bottles',
    ReorderLevel: 25,
    SupplierID: 1,
    UnitPrice: '19.0000',
    UnitsInStock: 17,
    UnitsOnOrder: 40
  }, {
    CategoryID: 2,
    Discontinued: false,
    OrderDate: new Date('2006-03-17'),
    ProductID: 3,
    ProductName: 'Aniseed Syrup',
    QuantityPerUnit: '12 - 550 ml bottles',
    ReorderLevel: 25,
    SupplierID: 1,
    UnitPrice: '10.0000',
    UnitsInStock: 13,
    UnitsOnOrder: 70
  }, {
    CategoryID: 2,
    Discontinued: false,
    OrderDate: new Date('2020-03-17'),
    ProductID: 4,
    ProductName: 'Chef Antons Cajun Seasoning',
    QuantityPerUnit: '48 - 6 oz jars',
    ReorderLevel: 0,
    SupplierID: 2,
    UnitPrice: '22.0000',
    UnitsInStock: 53,
    UnitsOnOrder: 0
  }, {
    CategoryID: 2,
    Discontinued: true,
    OrderDate: new Date('2011-11-11'),
    ProductID: 5,
    ProductName: 'Chef Antons Gumbo Mix',
    QuantityPerUnit: '36 boxes',
    ReorderLevel: 0,
    SupplierID: 2,
    UnitPrice: '21.3500',
    UnitsInStock: 0,
    UnitsOnOrder: 0
  }, {
    CategoryID: 2,
    Discontinued: false,
    OrderDate: new Date('2017-12-17'),
    ProductID: 6,
    ProductName: 'Grandmas Boysenberry Spread',
    QuantityPerUnit: '12 - 8 oz jars',
    ReorderLevel: 25,
    SupplierID: 3,
    UnitPrice: '25.0000',
    UnitsInStock: 0,
    UnitsOnOrder: 0
  }, {
    CategoryID: 7,
    Discontinued: false,
    OrderDate: new Date('2016-07-17'),
    ProductID: 7,
    ProductName: 'Uncle Bobs Organic Dried Pears',
    QuantityPerUnit: '12 - 1 lb pkgs.',
    ReorderLevel: 10,
    SupplierID: 3,
    UnitPrice: '30.0000',
    UnitsInStock: 150,
    UnitsOnOrder: 0
  }, {
    CategoryID: 2,
    Discontinued: false,
    OrderDate: new Date('2025-01-17'),
    ProductID: 8,
    ProductName: 'Northwoods Cranberry Sauce',
    QuantityPerUnit: '12 - 12 oz jars',
    ReorderLevel: 0,
    SupplierID: 3,
    UnitPrice: '40.0000',
    UnitsInStock: 6,
    UnitsOnOrder: 0
  }, {
    CategoryID: 6,
    Discontinued: true,
    OrderDate: new Date('2010-02-17'),
    ProductID: 9,
    ProductName: 'Mishi Kobe Niku',
    QuantityPerUnit: '18 - 500 g pkgs.',
    ReorderLevel: 0,
    SupplierID: 4,
    UnitPrice: '$97.0000',
    UnitsInStock: 29,
    UnitsOnOrder: 0
  }, {
    CategoryID: 8,
    Discontinued: false,
    OrderDate: new Date('2008-05-17'),
    ProductID: 10,
    ProductName: 'Ikura',
    QuantityPerUnit: '12 - 200 ml jars',
    ReorderLevel: 0,
    SupplierID: 4,
    UnitPrice: '31.0000',
    UnitsInStock: 31,
    UnitsOnOrder: 0
  }
];
