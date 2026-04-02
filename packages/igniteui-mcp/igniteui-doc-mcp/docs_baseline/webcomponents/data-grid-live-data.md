---
title: Web Components Data Grid | Data Animation | Data Binding | Infragistics
_description: Use Infragistics' Web Components table to handle thousands of updates per seconds while remaining responsive. View Ignite UI for Web Components table demos!
_keywords: Web Components Table, Data Grid, live data updates, Ignite UI for Web Components, Infragistics, data binding
mentionedTypes: ["Implementation.Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Binding Live Data
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Web Components Binding Live Data

The Ignite UI for Web Components Data Table / Data Grid is able to handle thousands of updates per seconds, while keeping the grid responsive for any interaction that the user may undertake. You can use the following sample to check performance of the Grid handling under various live data scenarios by adjusting interval between data updates as well as volume of data updates.

## Web Components Binding Live Data Example

```typescript
/* tslint:disable */
export const Regions: any[] = [
  {
      "Name": "North America",
      "Countries": [ "Canada", "United States", "Mexico" ]
  },
  {
      "Name": "Middle East",
      "Countries": [ "Turkey", "Iraq", "Saudi Arabia", "Syria", "UAE", "Israel", "Jordan", "Lebanon", "Oman", "Kuwait", "Qatar", "Bahrain", "Iran" ]
  },
  {
      "Name": "Europe",
      "Countries": [ "Russia", "Germany", "France", "United Kingdom", "Italy", "Spain", "Poland", "Romania", "Netherlands", "Belgium", "Greece",
          "Portugal", "Czechia", "Hungary", "Sweden", "Austria", "Switzerland", "Bulgaria", "Denmark", "Finland", "Slovakia", "Norway",
          "Ireland", "Croatia", "Slovenia", "Estonia", "Iceland",]
  },
  {
      "Name": "Africa",
      "Countries": [ "Nigeria", "Ethiopia", "Egypt", "South Africa", "Algeria", "Morocco", "Cameroon", "Niger", "Senegal", "Tunisia", "Libya"]
  },
  {
      "Name": "Asia Pacific",
      "Countries": [ "Afghanistan", "Australia", "Azerbaijan", "China", "Hong Kong", "India", "Indonesia",
          "Japan", "Malaysia", "New Zealand", "Pakistan", "Philippines", "Korea", "Singapore", "Taiwan", "Thailand"]
  },
  {
      "Name": "South America",
      "Countries": [ "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela" ]
  }
]

export const DealType: any[] = [
  "Buy", "Sell"
]

export const Contracts: any[] = [
  "Forwards", "Futures", "Options", "Swap", "CFD"
]

export const Settlements: any[] = [
  "Credit", "Cash", "Loan"
]

export const SectorTypes: any[] = [
  "Public", "Private", "Government"
]

export const CurrencyTypes: any[] = [
  "USD", "EUR", "PLN", "GBP", "YEN"
]

export const CountryRisks: any[] = [
  "Low", "High",
]

export const SecurityTypes: any[] = [
  "Poor", "Good", "High",
]

export const IssuerNames: any[] = [
  "American Airlines", "Delta Airlines", "Southwest", "FedEx",
]

export const RatingTypes: any[] = [
  "AAA", "BBB", "CCC",
]

export const DefaultData: any[] = [
{
  "IndGroup": "Airlines",
  "IndSector": "Consumer, Cyclical",
  "IndCategory": "Airlines",
  // "Sector": "Public",
  // "Sector": "Pfd",
  // "Contract": "Complete",
  // "Issuer": "AMERICAN AIRLINES GROUP",
  // "Rating": "WR",
  "Fitch": "N.A.",
  "Collateral": "Assets",
  // "Currency": "USD",
  // "Security": "001765866 Pfd",
  "Transactions": "1765866",
  // "Ticker": "AAL",
  "CPN": "7.875",
  "Maturity": "7/13/2022",
  "Spread": 28.302,
  "KRD_3YR": 0.06,
  "KRD_5YR": 0.36,
  "KRD_1YR": -0.17,
}];

export const DataItems: any[] = [
{
 "Category": "Metal",
 "Type": "Gold",
 "Spread": 0.01,
 "Open": 1281.10,
 "Price": 1280.7317,
 "Buy": 1280.7267,
 "Sell": 1280.7367,
 "Change": -0.3683,
 "Change (%)": -0.0287,
 "Volume": 48387,
 "High (D)": 1289.50,
 "Low (D)": 1279.10,
 "High (Y)": 1306,
 "Low (Y)": 1047.20,
 "Start (Y)": 1176.60,
 "Change On Year(%)": 8.8502
},
{
 "Category": "Metal",
 "Type": "Silver",
 "Spread": 0.01,
 "Open": 17.43,
 "Price": 17.42,
 "Buy": 17.43,
 "Sell": 17.43,
 "Change": -0.01,
 "Change (%)": -0.0574,
 "Volume": 11720,
 "High (D)": 17.51,
 "Low (D)": 17.37,
 "High (Y)": 18.06,
 "Low (Y)": 13.73,
 "Start (Y)": 15.895,
 "Change On Year(%)": 9.5942
},
{
 "Category": "Metal",
 "Type": "Copper",
 "Spread": 0.02,
 "Open": 2.123,
 "Price": 2.113,
 "Buy": 2.123,
 "Sell": 2.123,
 "Change": -0.01,
 "Change (%)": -0.471,
 "Volume": 28819,
 "High (D)": 2.16,
 "Low (D)": 2.11,
 "High (Y)": 2.94,
 "Low (Y)": 1.96,
 "Start (Y)": 2.45,
 "Change On Year(%)": -13.7551
},
{
 "Category": "Metal",
 "Type": "Platinum",
 "Spread": 0.01,
 "Open": 1071.60,
 "Price": 1071.0993,
 "Buy": 1071.0943,
 "Sell": 1071.1043,
 "Change": -0.5007,
 "Change (%)": -0.0467,
 "Volume": 3039,
 "High (D)": 1081.20,
 "Low (D)": 1070.50,
 "High (Y)": 1120.60,
 "Low (Y)": 812.40,
 "Start (Y)": 966.50,
 "Change On Year(%)": 10.8225
},
{
 "Category": "Metal",
 "Type": "Palladium",
 "Spread": 0.01,
 "Open": 600.55,
 "Price": 601.0005,
 "Buy": 600.9955,
 "Sell": 601.0055,
 "Change": 0.4505,
 "Change (%)": 0.075,
 "Volume": 651,
 "High (D)": 607.20,
 "Low (D)": 598.40,
 "High (Y)": 690,
 "Low (Y)": 458.6,
 "Start (Y)": 574.3,
 "Change On Year(%)": 4.6492
},
{
 "Category": "Oil",
 "Type": "Oil",
 "Spread": 0.015,
 "Open": 45.54,
 "Price": 45.7899,
 "Buy": 45.7824,
 "Sell": 45.7974,
 "Change": 0.2499,
 "Change (%)": 0.5487,
 "Volume": 107196,
 "High (D)": 45.94,
 "Low (D)": 45.00,
 "High (Y)": 65.28,
 "Low (Y)": 30.79,
 "Start (Y)": 48.035,
 "Change On Year(%)": -4.6739
},
{
 "Category": "Oil",
 "Type": "Brent",
 "Spread": 0.01,
 "Open": 46.06,
 "Price": 46.05,
 "Buy": 46.06,
 "Sell": 46.06,
 "Change": -0.01,
 "Change (%)": -0.0217,
 "Volume": 59818,
 "High (D)": 46.48,
 "Low (D)": 45.60,
 "High (Y)": 71.14,
 "Low (Y)": 30.02,
 "Start (Y)": 50.58,
 "Change On Year(%)": -8.9561
},
{
 "Category": "Oil",
 "Type": "Natural Gas",
 "Spread": 0.02,
 "Open": 2.094,
 "Price": 2.104,
 "Buy": 2.094,
 "Sell": 2.094,
 "Change": 0.01,
 "Change (%)": 0.4776,
 "Volume": 2783,
 "High (D)": 2.11,
 "Low (D)": 2.09,
 "High (Y)": 3.20,
 "Low (Y)": 1.84,
 "Start (Y)": 2.52,
 "Change On Year(%)": -16.5079
},
{
 "Category": "Oil",
 "Type": "Gas",
 "Spread": 0.015,
 "Open": 1.5086,
 "Price": 1.9532,
 "Buy": 1.9457,
 "Sell": 1.9607,
 "Change": 0.4446,
 "Change (%)": 29.4686,
 "Volume": 2646,
 "High (D)": 1.9532,
 "Low (D)": 1.50,
 "High (Y)": 2.05,
 "Low (Y)": 1.15,
 "Start (Y)": 1.60,
 "Change On Year(%)": 22.0727
},
{
 "Category": "Oil",
 "Type": "Diesel",
 "Spread": 0.015,
 "Open": 1.3474,
 "Price": 1.3574,
 "Buy": 1.3474,
 "Sell": 1.3474,
 "Change": 0.01,
 "Change (%)": 0.7422,
 "Volume": 2971,
 "High (D)": 1.36,
 "Low (D)": 1.34,
 "High (Y)": 2.11,
 "Low (Y)": 0.92,
 "Start (Y)": 1.515,
 "Change On Year(%)": -10.4026
},
{
 "Category": "Oil",
 "Type": "Ethanol",
 "Spread": 0.01,
 "Open": 1.512,
 "Price": 2.7538,
 "Buy": 2.7488,
 "Sell": 2.7588,
 "Change": 1.2418,
 "Change (%)": 82.1323,
 "Volume": 14,
 "High (D)": 2.7538,
 "Low (D)": 1.1168,
 "High (Y)": 2.7538,
 "Low (Y)": 1.1168,
 "Start (Y)": 1.475,
 "Change On Year(%)": 86.7011
},
{
 "Category": "Oil",
 "Type": "Crude",
 "Spread": 0.02,
 "Open": 27.55,
 "Price": 27.58,
 "Buy": 27.55,
 "Sell": 27.55,
 "Change": 0.03,
 "Change (%)": 0.1089,
 "Volume": 12,
 "High (D)": 27.55,
 "Low (D)": 27.55,
 "High (Y)": 29.32,
 "Low (Y)": 21.28,
 "Start (Y)": 25.30,
 "Change On Year(%)": 9.0119
},
{
 "Category": "Oil",
 "Type": "Coal",
 "Spread": 0.015,
 "Open": 0.4363,
 "Price": 0.4163,
 "Buy": 0.4363,
 "Sell": 0.4363,
 "Change": -0.02,
 "Change (%)": -4.584,
 "Volume": 3,
 "High (D)": 0.4363,
 "Low (D)": 0.4363,
 "High (Y)": 0.4841,
 "Low (Y)": 0.3954,
 "Start (Y)": 0.4398,
 "Change On Year(%)": -5.3326
},
{
 "Category": "Agriculture",
 "Type": "Wheat",
 "Spread": 0.01,
 "Open": 465.50,
 "Price": 465.52,
 "Buy": 465.50,
 "Sell": 465.50,
 "Change": 0.02,
 "Change (%)": 0.0043,
 "Volume": 4318,
 "High (D)": 467.00,
 "Low (D)": 463.25,
 "High (Y)": 628.50,
 "Low (Y)": 449.50,
 "Start (Y)": 539.00,
 "Change On Year(%)": -13.6327
},
{
 "Category": "Agriculture",
 "Type": "Corn",
 "Spread": 0.01,
 "Open": 379.50,
 "Price": 379.8026,
 "Buy": 379.7976,
 "Sell": 379.8076,
 "Change": 0.3026,
 "Change (%)": 0.0797,
 "Volume": 11266,
 "High (D)": 381.00,
 "Low (D)": 377.75,
 "High (Y)": 471.25,
 "Low (Y)": 351.25,
 "Start (Y)": 411.25,
 "Change On Year(%)": -7.6468
},
{
 "Category": "Agriculture",
 "Type": "Sugar",
 "Spread": 0.01,
 "Open": 15.68,
 "Price": 14.6742,
 "Buy": 14.6692,
 "Sell": 14.6792,
 "Change": -1.0058,
 "Change (%)": -6.4146,
 "Volume": 4949,
 "High (D)": 15.70,
 "Low (D)": 14.6742,
 "High (Y)": 16.87,
 "Low (Y)": 11.37,
 "Start (Y)": 14.12,
 "Change On Year(%)": 3.9249
},
{
 "Category": "Agriculture",
 "Type": "Soybean",
 "Spread": 0.01,
 "Open": 1038.00,
 "Price": 1038.6171,
 "Buy": 1038.6121,
 "Sell": 1038.6221,
 "Change": 0.6171,
 "Change (%)": 0.0595,
 "Volume": 20356,
 "High (D)": 1044.00,
 "Low (D)": 1031.75,
 "High (Y)": 1057.00,
 "Low (Y)": 859.50,
 "Start (Y)": 958.25,
 "Change On Year(%)": 8.3869
},
{
 "Category": "Agriculture",
 "Type": "Soy oil",
 "Spread": 0.01,
 "Open": 33.26,
 "Price": 33.7712,
 "Buy": 33.7662,
 "Sell": 33.7762,
 "Change": 0.5112,
 "Change (%)": 1.5371,
 "Volume": 10592,
 "High (D)": 33.7712,
 "Low (D)": 33.06,
 "High (Y)": 35.43,
 "Low (Y)": 26.61,
 "Start (Y)": 31.02,
 "Change On Year(%)": 8.8692
},
{
 "Category": "Agriculture",
 "Type": "Soy Meat",
 "Spread": 0.01,
 "Open": 342.60,
 "Price": 342.62,
 "Buy": 342.60,
 "Sell": 342.60,
 "Change": 0.02,
 "Change (%)": 0.0058,
 "Volume": 5646,
 "High (D)": 345.40,
 "Low (D)": 340.30,
 "High (Y)": 353.40,
 "Low (Y)": 261.70,
 "Start (Y)": 307.55,
 "Change On Year(%)": 11.403
},
{
 "Category": "Agriculture",
 "Type": "OJ Future",
 "Spread": 0.01,
 "Open": 140.60,
 "Price": 140.1893,
 "Buy": 140.1843,
 "Sell": 140.1943,
 "Change": -0.4107,
 "Change (%)": -0.2921,
 "Volume": 7,
 "High (D)": 140.1893,
 "Low (D)": 0.00,
 "High (Y)": 155.95,
 "Low (Y)": 113.00,
 "Start (Y)": 134.475,
 "Change On Year(%)": 4.2493
},
{
 "Category": "Agriculture",
 "Type": "Coffee",
 "Spread": 0.01,
 "Open": 125.70,
 "Price": 125.69,
 "Buy": 125.70,
 "Sell": 125.70,
 "Change": -0.01,
 "Change (%)": -0.008,
 "Volume": 1654,
 "High (D)": 125.80,
 "Low (D)": 125.00,
 "High (Y)": 155.75,
 "Low (Y)": 115.35,
 "Start (Y)": 135.55,
 "Change On Year(%)": -7.2741
},
{
 "Category": "Agriculture",
 "Type": "Cocoa",
 "Spread": 0.01,
 "Open": 3076.00,
 "Price": 3076.03,
 "Buy": 3076.00,
 "Sell": 3076.00,
 "Change": 0.03,
 "Change (%)": 0.001,
 "Volume": 978,
 "High (D)": 3078.00,
 "Low (D)": 3066.00,
 "High (Y)": 3406.00,
 "Low (Y)": 2746.00,
 "Start (Y)": 3076.00,
 "Change On Year(%)": 0.001
},
{
 "Category": "Agriculture",
 "Type": "Rice",
 "Spread": 0.01,
 "Open": 11.245,
 "Price": 10.4154,
 "Buy": 10.4104,
 "Sell": 10.4204,
 "Change": -0.8296,
 "Change (%)": -7.3779,
 "Volume": 220,
 "High (D)": 11.38,
 "Low (D)": 10.4154,
 "High (Y)": 14.14,
 "Low (Y)": 9.70,
 "Start (Y)": 11.92,
 "Change On Year(%)": -12.6228
},
{
 "Category": "Agriculture",
 "Type": "Oats",
 "Spread": 0.01,
 "Open": 194.50,
 "Price": 194.2178,
 "Buy": 194.2128,
 "Sell": 194.2228,
 "Change": -0.2822,
 "Change (%)": -0.1451,
 "Volume": 64,
 "High (D)": 195.75,
 "Low (D)": 194.00,
 "High (Y)": 241.25,
 "Low (Y)": 183.75,
 "Start (Y)": 212.50,
 "Change On Year(%)": -8.6034
},
{
 "Category": "Agriculture",
 "Type": "Milk",
 "Spread": 0.01,
 "Open": 12.87,
 "Price": 12.86,
 "Buy": 12.87,
 "Sell": 12.87,
 "Change": -0.01,
 "Change (%)": -0.0777,
 "Volume": 7,
 "High (D)": 12.89,
 "Low (D)": 12.81,
 "High (Y)": 16.96,
 "Low (Y)": 12.81,
 "Start (Y)": 14.885,
 "Change On Year(%)": -13.6043
},
{
 "Category": "Agriculture",
 "Type": "Cotton",
 "Spread": 0.01,
 "Open": 61.77,
 "Price": 61.76,
 "Buy": 61.77,
 "Sell": 61.77,
 "Change": -0.01,
 "Change (%)": -0.0162,
 "Volume": 3612,
 "High (D)": 62.06,
 "Low (D)": 61.32,
 "High (Y)": 67.59,
 "Low (Y)": 54.33,
 "Start (Y)": 60.96,
 "Change On Year(%)": 1.3123
},
{
 "Category": "Agriculture",
 "Type": "Lumber",
 "Spread": 0.01,
 "Open": 303.90,
 "Price": 304.5994,
 "Buy": 304.5944,
 "Sell": 304.6044,
 "Change": 0.6994,
 "Change (%)": 0.2302,
 "Volume": 2,
 "High (D)": 304.5994,
 "Low (D)": 303.90,
 "High (Y)": 317.10,
 "Low (Y)": 236.00,
 "Start (Y)": 276.55,
 "Change On Year(%)": 10.1426
},
{
 "Category": "Livestock",
 "Type": "LV Cattle",
 "Spread": 0.01,
 "Open": 120.725,
 "Price": 120.705,
 "Buy": 120.725,
 "Sell": 120.725,
 "Change": -0.02,
 "Change (%)": -0.0166,
 "Volume": 4,
 "High (D)": 120.725,
 "Low (D)": 120.725,
 "High (Y)": 147.98,
 "Low (Y)": 113.90,
 "Start (Y)": 130.94,
 "Change On Year(%)": -7.8166
},
{
 "Category": "Livestock",
 "Type": "FD Cattle",
 "Spread": 0.01,
 "Open": 147.175,
 "Price": 148.6065,
 "Buy": 148.6015,
 "Sell": 148.6115,
 "Change": 1.4315,
 "Change (%)": 0.9727,
 "Volume": 5,
 "High (D)": 148.6065,
 "Low (D)": 147.175,
 "High (Y)": 190.00,
 "Low (Y)": 138.10,
 "Start (Y)": 164.05,
 "Change On Year(%)": -9.4139
},
{
 "Category": "Livestock",
 "Type": "Lean Hogs",
 "Spread": 0.01,
 "Open": 81.275,
 "Price": 81.8146,
 "Buy": 81.8096,
 "Sell": 81.8196,
 "Change": 0.5396,
 "Change (%)": 0.664,
 "Volume": 1,
 "High (D)": 81.8146,
 "Low (D)": 81.275,
 "High (Y)": 83.98,
 "Low (Y)": 70.25,
 "Start (Y)": 77.115,
 "Change On Year(%)": 6.0943
},
{
 "Category": "Currencies",
 "Type": "USD IDX Future",
 "Spread": 0.02,
 "Open": 93.88,
 "Price": 93.7719,
 "Buy": 93.7619,
 "Sell": 93.7819,
 "Change": -0.1081,
 "Change (%)": -0.1151,
 "Volume": 5788,
 "High (D)": 94.05,
 "Low (D)": 93.7534,
 "High (Y)": 100.70,
 "Low (Y)": 91.88,
 "Start (Y)": 96.29,
 "Change On Year(%)": -2.6151
},
{
 "Category": "Currencies",
 "Type": "USD/JPY Future",
 "Spread": 0.02,
 "Open": 9275.50,
 "Price": 9277.3342,
 "Buy": 9277.3242,
 "Sell": 9277.3442,
 "Change": 1.8342,
 "Change (%)": 0.0198,
 "Volume": 47734,
 "High (D)": 9277.3342,
 "Low (D)": 0.93,
 "High (Y)": 9483.00,
 "Low (Y)": 0.93,
 "Start (Y)": 4741.965,
 "Change On Year(%)": 95.6432
},
{
 "Category": "Currencies",
 "Type": "GBP/USD Future",
 "Spread": 0.02,
 "Open": 1.4464,
 "Price": 1.1941,
 "Buy": 1.1841,
 "Sell": 1.2041,
 "Change": -0.2523,
 "Change (%)": -17.4441,
 "Volume": 29450,
 "High (D)": 1.45,
 "Low (D)": 1.1941,
 "High (Y)": 1.59,
 "Low (Y)": 1.1941,
 "Start (Y)": 1.485,
 "Change On Year(%)": -19.59
},
{
 "Category": "Currencies",
 "Type": "AUD/USD Future",
 "Spread": 0.02,
 "Open": 0.7344,
 "Price": 0.7444,
 "Buy": 0.7344,
 "Sell": 0.7344,
 "Change": 0.01,
 "Change (%)": 1.3617,
 "Volume": 36764,
 "High (D)": 0.74,
 "Low (D)": 0.73,
 "High (Y)": 0.79,
 "Low (Y)": 0.68,
 "Start (Y)": 0.735,
 "Change On Year(%)": 1.2789
},
{
 "Category": "Currencies",
 "Type": "USD/CAD Future",
 "Spread": 0.02,
 "Open": 0.7744,
 "Price": 0.9545,
 "Buy": 0.9445,
 "Sell": 0.9645,
 "Change": 0.1801,
 "Change (%)": 23.2622,
 "Volume": 13669,
 "High (D)": 0.9545,
 "Low (D)": 0.77,
 "High (Y)": 0.9545,
 "Low (Y)": 0.68,
 "Start (Y)": 0.755,
 "Change On Year(%)": 26.4295
},
{
 "Category": "Currencies",
 "Type": "USD/CHF Future",
 "Spread": 0.02,
 "Open": 1.0337,
 "Price": 1.0437,
 "Buy": 1.0337,
 "Sell": 1.0337,
 "Change": 0.01,
 "Change (%)": 0.9674,
 "Volume": 5550,
 "High (D)": 1.03,
 "Low (D)": 1.03,
 "High (Y)": 1.11,
 "Low (Y)": 0.98,
 "Start (Y)": 1.045,
 "Change On Year(%)": -0.1244
},
{
 "Category": "Index",
 "Type": "DOW Future",
 "Spread": 0.01,
 "Open": 17711.00,
 "Price": 17712.1515,
 "Buy": 17712.1465,
 "Sell": 17712.1565,
 "Change": 1.1515,
 "Change (%)": 0.0065,
 "Volume": 22236,
 "High (D)": 17727.00,
 "Low (D)": 17642.00,
 "High (Y)": 18083.00,
 "Low (Y)": 15299.00,
 "Start (Y)": 16691.00,
 "Change On Year(%)": 6.118
},
{
 "Category": "Index",
 "Type": "S&P Future",
 "Spread": 0.01,
 "Open": 2057.50,
 "Price": 2056.6018,
 "Buy": 2056.5968,
 "Sell": 2056.6068,
 "Change": -0.8982,
 "Change (%)": -0.0437,
 "Volume": 142780,
 "High (D)": 2059.50,
 "Low (D)": 2049.00,
 "High (Y)": 2105.50,
 "Low (Y)": 1794.50,
 "Start (Y)": 1950.00,
 "Change On Year(%)": 5.4668
},
{
 "Category": "Index",
 "Type": "NAS Future",
 "Spread": 0.01,
 "Open": 4341.25,
 "Price": 4341.28,
 "Buy": 4341.25,
 "Sell": 4341.25,
 "Change": 0.03,
 "Change (%)": 0.0007,
 "Volume": 18259,
 "High (D)": 4347.00,
 "Low (D)": 4318.00,
 "High (Y)": 4719.75,
 "Low (Y)": 3867.75,
 "Start (Y)": 4293.75,
 "Change On Year(%)": 1.107
},
{
 "Category": "Index",
 "Type": "S&P MID MINI",
 "Spread": 0.01,
 "Open": 1454.30,
 "Price": 1455.7812,
 "Buy": 1455.7762,
 "Sell": 1455.7862,
 "Change": 1.4812,
 "Change (%)": 0.1018,
 "Volume": 338,
 "High (D)": 1455.7812,
 "Low (D)": 1448.00,
 "High (Y)": 1527.30,
 "Low (Y)": 1236.00,
 "Start (Y)": 1381.65,
 "Change On Year(%)": 5.3654
},
{
 "Category": "Index",
 "Type": "S&P 600 MINI",
 "Spread": 0.01,
 "Open": 687.90,
 "Price": 687.88,
 "Buy": 687.90,
 "Sell": 687.90,
 "Change": -0.02,
 "Change (%)": -0.0029,
 "Volume": 0,
 "High (D)": 0.00,
 "Low (D)": 0.00,
 "High (Y)": 620.32,
 "Low (Y)": 595.90,
 "Start (Y)": 608.11,
 "Change On Year(%)": 13.1177
},
{
 "Category": "Interest Rate",
 "Type": "US 30YR Future",
 "Spread": 0.01,
 "Open": 164.875,
 "Price": 164.1582,
 "Buy": 164.1532,
 "Sell": 164.1632,
 "Change": -0.7168,
 "Change (%)": -0.4347,
 "Volume": 28012,
 "High (D)": 165.25,
 "Low (D)": 164.0385,
 "High (Y)": 169.38,
 "Low (Y)": 151.47,
 "Start (Y)": 160.425,
 "Change On Year(%)": 2.3271
},
{
 "Category": "Interest Rate",
 "Type": "US 2Y Future",
 "Spread": 0.01,
 "Open": 109.3984,
 "Price": 109.3884,
 "Buy": 109.3984,
 "Sell": 109.3984,
 "Change": -0.01,
 "Change (%)": -0.0091,
 "Volume": 17742,
 "High (D)": 109.41,
 "Low (D)": 109.38,
 "High (Y)": 109.80,
 "Low (Y)": 108.62,
 "Start (Y)": 109.21,
 "Change On Year(%)": 0.1634
},
{
 "Category": "Interest Rate",
 "Type": "US 10YR Future",
 "Spread": 0.01,
 "Open": 130.5625,
 "Price": 130.5825,
 "Buy": 130.5625,
 "Sell": 130.5625,
 "Change": 0.02,
 "Change (%)": 0.0153,
 "Volume": 189310,
 "High (D)": 130.63,
 "Low (D)": 130.44,
 "High (Y)": 132.64,
 "Low (Y)": 125.48,
 "Start (Y)": 129.06,
 "Change On Year(%)": 1.1797
},
{
 "Category": "Interest Rate",
 "Type": "Euro$ 3M",
 "Spread": 0.01,
 "Open": 99.18,
 "Price": 99.17,
 "Buy": 99.18,
 "Sell": 99.18,
 "Change": -0.01,
 "Change (%)": -0.0101,
 "Volume": 29509,
 "High (D)": 99.18,
 "Low (D)": 99.17,
 "High (Y)": 99.38,
 "Low (Y)": 98.41,
 "Start (Y)": 98.895,
 "Change On Year(%)": 0.2781
}
];

interface UpdateResponse {
  data: any[];
  recordsUpdated: number;
}

/* tslint:enable */
export class LiveFinancialData {

  public static generateData(count: number): any[] {
      const data: any[] = [];
      for (let i = 0; i < count; i++) {
          const rand = Math.floor(Math.random() * Math.floor(DataItems.length));

          const item = Object.assign({}, DataItems[rand]);
          item.Settlement = this.getRandomItem(Settlements);
          item.Contract = this.getRandomItem(Contracts);
          const region = this.getRandomItem(Regions);
          item.Region = region.Name;
          item.Country = this.getRandomItem(region.Countries);
          item.Risk = this.getRandomItem(CountryRisks);
          item.Sector = this.getRandomItem(SectorTypes);
          item.Currency = this.getRandomItem(CurrencyTypes);
          item.Security = this.getRandomItem(SecurityTypes);
          item.Issuer = this.getRandomItem(IssuerNames);
          item.Maturity = this.getRandomDate();
          item.Rating = this.getRandomItem(RatingTypes);

          for (const mockData of DefaultData) {
              for (const prop in mockData) {
                  if (mockData.hasOwnProperty(prop)) {
                      item[prop] = mockData[prop];
                  }
              }
          }
          item.ID = i;
          this.randomizeDataValues(item);
          data.push(item);
      }
      return data;
  }

  public static updateAllPrices(data: any[]): any[] {
      const currData = [];
      for (const dataRow of data) {
        const item = Object.assign({}, dataRow);
        this.randomizeDataValues(item);
        currData.push(item);
      }
      return currData;
  }

  public static updateRandomPrices(data: any[]): any {
      const currData = data.slice(0, data.length + 1);
      let y = 0;
      for (let i = Math.round(Math.random() * 10); i < data.length; i += Math.round(Math.random() * 10)) {
        const item = Object.assign({}, data[i]);
        this.randomizeDataValues(item);
        currData[i] = item;
        y++;
      }
      return currData;
  }

  public static updateRandomPrices2(data: any[]): UpdateResponse {
      const currData = data.slice(0, data.length + 1);
      let y = 0;
      for (let i = Math.round(Math.random() * 10); i < data.length; i += Math.round(Math.random() * 10)) {
        const item = Object.assign({}, data[i]);
        this.randomizeDataValues(item);
        currData[i] = item;
        y++;
      }
      return {data: currData, recordsUpdated: y };
  }

  public static randomizeDataValues(item: any) {
      const changeP = "Change (%)";
      const res = this.getRandomPrice(item.Price);
      item.Change = res.Price - item.Price;
      item.Price = res.Price;
      item[changeP] = res.ChangePercent;
  }

  public static getRandomPrice(oldPrice: any): any {
      const rnd = parseFloat(Math.random().toFixed(2));
      const volatility = 2;
      let newPrice = 0;

      let changePercent = 2 * volatility * rnd;
      if (changePercent > volatility) {
          changePercent -= (2 * volatility);
      }
      const changeAmount = oldPrice * (changePercent / 100);
      newPrice = oldPrice + changeAmount;
      const result = { Price: 0, ChangePercent: 0 };
      result.Price = Math.round(newPrice * 100) / 100;
      result.ChangePercent = Math.round(changePercent * 100) / 100;
      return result;
  }

  public static getRandomDate() {
      const now: Date = new Date();
      const month = this.getRandomNumber(0, 8);
      const day = this.getRandomNumber(10, 27);
      return new Date(now.getFullYear(), month, day);
  }

  public static getRandomItem(array: any[]): any {
      const index = Math.round(this.getRandomNumber(0, array.length - 1));
      return array[index];
  }

  public static getRandomNumber(min: number, max: number): number {
      return Math.round(min + Math.random() * (max - min));
  }

  public static getRandomCountry(region: any): string {
      if (region.Countries === undefined) {
          return this.getRandomItem(Regions[2].Countries);
      } else {
          return this.getRandomItem(region.Countries);
      }
  }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## API References

- [`IgcDataGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids.igcdatagridcomponent.html)
