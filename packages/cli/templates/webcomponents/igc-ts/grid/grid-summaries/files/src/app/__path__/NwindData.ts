export class NwindDataItem {
    public constructor(init: Partial<NwindDataItem>) {
        Object.assign(this, init);
    }

    ProductID: number = 0;
    ProductName: string = "";
    SupplierID: number = 0;
    CategoryID: number = 0;
    QuantityPerUnit: string = "";
    UnitPrice: number = 0;
    UnitsInStock: number = 0;
    UnitsOnOrder: number = 0;
    ReorderLevel: number = 0;
    Discontinued: boolean = false;
    OrderDate: string = "";
    Rating: number = 0;
    Locations: NwindDataItem_LocationsItem[] = [];

}
export class NwindDataItem_LocationsItem {
    public constructor(init: Partial<NwindDataItem_LocationsItem>) {
        Object.assign(this, init);
    }

    Shop: string = "";
    LastInventory: string = "";

}
export class NwindData extends Array<NwindDataItem> {
    public constructor() {
        super();
        this.push(new NwindDataItem(
        {
            ProductID: 1,
            ProductName: `Chai`,
            SupplierID: 1,
            CategoryID: 1,
            QuantityPerUnit: `10 boxes x 20 bags`,
            UnitPrice: 18,
            UnitsInStock: 39,
            UnitsOnOrder: 30,
            ReorderLevel: 10,
            Discontinued: false,
            OrderDate: `2012-02-12`,
            Rating: 5,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Fun-Tasty Co.`,
                    LastInventory: `06/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 2,
            ProductName: `Chang`,
            SupplierID: 1,
            CategoryID: 1,
            QuantityPerUnit: `24 - 12 oz bottles`,
            UnitPrice: 19,
            UnitsInStock: 17,
            UnitsOnOrder: 40,
            ReorderLevel: 25,
            Discontinued: true,
            OrderDate: `2003-03-17`,
            Rating: 5,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Super Market`,
                    LastInventory: `09/09/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 3,
            ProductName: `Aniseed Syrup`,
            SupplierID: 1,
            CategoryID: 2,
            QuantityPerUnit: `12 - 550 ml bottles`,
            UnitPrice: 10,
            UnitsInStock: 13,
            UnitsOnOrder: 70,
            ReorderLevel: 25,
            Discontinued: false,
            OrderDate: `2006-03-17`,
            Rating: 3,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Street Market`,
                    LastInventory: `12/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `24/7 Market`,
                    LastInventory: `11/11/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 4,
            ProductName: `Chef Antons Cajun Seasoning`,
            SupplierID: 2,
            CategoryID: 2,
            QuantityPerUnit: `48 - 6 oz jars`,
            UnitPrice: 22,
            UnitsInStock: 53,
            UnitsOnOrder: 30,
            ReorderLevel: 0,
            Discontinued: false,
            OrderDate: `2016-03-17`,
            Rating: 3,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Fun-Tasty Co.`,
                    LastInventory: `06/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Street Market`,
                    LastInventory: `12/12/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 5,
            ProductName: `Chef Antons Gumbo Mix`,
            SupplierID: 2,
            CategoryID: 2,
            QuantityPerUnit: `36 boxes`,
            UnitPrice: 21.35,
            UnitsInStock: 0,
            UnitsOnOrder: 30,
            ReorderLevel: 0,
            Discontinued: true,
            OrderDate: `2011-11-11`,
            Rating: 5,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Super Market`,
                    LastInventory: `09/09/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 6,
            ProductName: `Grandmas Boysenberry Spread`,
            SupplierID: 3,
            CategoryID: 2,
            QuantityPerUnit: `12 - 8 oz jars`,
            UnitPrice: 25,
            UnitsInStock: 0,
            UnitsOnOrder: 30,
            ReorderLevel: 25,
            Discontinued: false,
            OrderDate: `2017-12-17`,
            Rating: 4,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Super Market`,
                    LastInventory: `09/09/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 7,
            ProductName: `Uncle Bobs Organic Dried Pears`,
            SupplierID: 3,
            CategoryID: 7,
            QuantityPerUnit: `12 - 1 lb pkgs.`,
            UnitPrice: 30,
            UnitsInStock: 150,
            UnitsOnOrder: 30,
            ReorderLevel: 10,
            Discontinued: false,
            OrderDate: `2016-07-17`,
            Rating: 5,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Fun-Tasty Co.`,
                    LastInventory: `06/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Street Market`,
                    LastInventory: `12/12/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 8,
            ProductName: `Northwoods Cranberry Sauce`,
            SupplierID: 3,
            CategoryID: 2,
            QuantityPerUnit: `12 - 12 oz jars`,
            UnitPrice: 40,
            UnitsInStock: 6,
            UnitsOnOrder: 30,
            ReorderLevel: 0,
            Discontinued: false,
            OrderDate: `2018-01-17`,
            Rating: 4,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Fun-Tasty Co.`,
                    LastInventory: `06/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 9,
            ProductName: `Mishi Kobe Niku`,
            SupplierID: 4,
            CategoryID: 6,
            QuantityPerUnit: `18 - 500 g pkgs.`,
            UnitPrice: 97,
            UnitsInStock: 29,
            UnitsOnOrder: 30,
            ReorderLevel: 0,
            Discontinued: true,
            OrderDate: `2010-02-17`,
            Rating: 4,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 10,
            ProductName: `Ikura`,
            SupplierID: 4,
            CategoryID: 8,
            QuantityPerUnit: `12 - 200 ml jars`,
            UnitPrice: 31,
            UnitsInStock: 31,
            UnitsOnOrder: 30,
            ReorderLevel: 0,
            Discontinued: false,
            OrderDate: `2008-05-17`,
            Rating: 3,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Wall Market`,
                    LastInventory: `12/06/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 11,
            ProductName: `Queso Cabrales`,
            SupplierID: 5,
            CategoryID: 4,
            QuantityPerUnit: `1 kg pkg.`,
            UnitPrice: 21,
            UnitsInStock: 22,
            UnitsOnOrder: 30,
            ReorderLevel: 30,
            Discontinued: false,
            OrderDate: `2009-01-17`,
            Rating: 5,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Fun-Tasty Co.`,
                    LastInventory: `06/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 12,
            ProductName: `Queso Manchego La Pastora`,
            SupplierID: 5,
            CategoryID: 4,
            QuantityPerUnit: `10 - 500 g pkgs.`,
            UnitPrice: 38,
            UnitsInStock: 86,
            UnitsOnOrder: 30,
            ReorderLevel: 0,
            Discontinued: false,
            OrderDate: `2015-11-17`,
            Rating: 3,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 13,
            ProductName: `Konbu`,
            SupplierID: 6,
            CategoryID: 8,
            QuantityPerUnit: `2 kg box`,
            UnitPrice: 6,
            UnitsInStock: 24,
            UnitsOnOrder: 30,
            ReorderLevel: 5,
            Discontinued: false,
            OrderDate: `2015-03-17`,
            Rating: 2,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Super Market`,
                    LastInventory: `09/09/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 14,
            ProductName: `Tofu`,
            SupplierID: 6,
            CategoryID: 7,
            QuantityPerUnit: `40 - 100 g pkgs.`,
            UnitPrice: 23.25,
            UnitsInStock: 35,
            UnitsOnOrder: 30,
            ReorderLevel: 0,
            Discontinued: false,
            OrderDate: `2017-06-17`,
            Rating: 4,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Street Market`,
                    LastInventory: `12/12/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 15,
            ProductName: `Genen Shouyu`,
            SupplierID: 6,
            CategoryID: 2,
            QuantityPerUnit: `24 - 250 ml bottles`,
            UnitPrice: 15.5,
            UnitsInStock: 39,
            UnitsOnOrder: 30,
            ReorderLevel: 5,
            Discontinued: false,
            OrderDate: `2014-03-17`,
            Rating: 4,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Local Market`,
                    LastInventory: `07/03/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Wall Market`,
                    LastInventory: `12/06/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 16,
            ProductName: `Pavlova`,
            SupplierID: 7,
            CategoryID: 3,
            QuantityPerUnit: `32 - 500 g boxes`,
            UnitPrice: 17.45,
            UnitsInStock: 29,
            UnitsOnOrder: 30,
            ReorderLevel: 10,
            Discontinued: false,
            OrderDate: `2018-03-28`,
            Rating: 2,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Street Market`,
                    LastInventory: `12/12/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `24/7 Market`,
                    LastInventory: `11/11/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 17,
            ProductName: `Alice Mutton`,
            SupplierID: 7,
            CategoryID: 6,
            QuantityPerUnit: `20 - 1 kg tins`,
            UnitPrice: 39,
            UnitsInStock: 0,
            UnitsOnOrder: 30,
            ReorderLevel: 0,
            Discontinued: true,
            OrderDate: `2015-08-17`,
            Rating: 2,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Farmer Market`,
                    LastInventory: `04/04/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 18,
            ProductName: `Carnarvon Tigers`,
            SupplierID: 7,
            CategoryID: 8,
            QuantityPerUnit: `16 kg pkg.`,
            UnitPrice: 62.5,
            UnitsInStock: 42,
            UnitsOnOrder: 30,
            ReorderLevel: 0,
            Discontinued: false,
            OrderDate: `2005-09-27`,
            Rating: 2,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `24/7 Market`,
                    LastInventory: `11/11/2018`
                }),
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Super Market`,
                    LastInventory: `09/09/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 19,
            ProductName: `Teatime Chocolate Biscuits`,
            SupplierID: 8,
            CategoryID: 3,
            QuantityPerUnit: ``,
            UnitPrice: 9.2,
            UnitsInStock: 25,
            UnitsOnOrder: 30,
            ReorderLevel: 5,
            Discontinued: false,
            OrderDate: `2001-03-17`,
            Rating: 2,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Local Market`,
                    LastInventory: `07/03/2018`
                })]

        }));
        this.push(new NwindDataItem(
        {
            ProductID: 20,
            ProductName: `Sir Rodneys Marmalade`,
            SupplierID: 8,
            CategoryID: 3,
            QuantityPerUnit: `4 - 100 ml jars`,
            UnitPrice: 4.5,
            UnitsInStock: 40,
            UnitsOnOrder: 30,
            ReorderLevel: 0,
            Discontinued: false,
            OrderDate: `2005-03-17`,
            Rating: 5,
            Locations: [
                new NwindDataItem_LocationsItem(
                {
                    Shop: `Super Market`,
                    LastInventory: `09/09/2018`
                })]

        }));
    }
}
