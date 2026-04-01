---
title: React Data Grid | Data Animation | Data Binding | Infragistics
_description: Use Infragistics' React table to handle thousands of updates per seconds while remaining responsive. View Ignite UI for React table demos!
_keywords: React Table, Data Grid, live data updates, Ignite UI for React, Infragistics, data binding
mentionedTypes: ["Implementation.Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Binding Live Data
_premium: true
---

# React Binding Live Data

The Ignite UI for React Data Table / Data Grid is able to handle thousands of updates per seconds, while keeping the grid responsive for any interaction that the user may undertake. You can use the following sample to check performance of the Grid handling under various live data scenarios by adjusting interval between data updates as well as volume of data updates.

## React Binding Live Data Example

```css
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.flex {
    flex: 1;
}

.toolArea {
  height: 120px;
  display: flex;
  flex-direction: column;
}

.toolAreaColumn {
  /* line-height: 55px; */
  /* height: 120px; */
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
}

.toolAreaRow {
  /* height: 55px; */
  /* line-height: 45px; */
  display: flex;
  flex-direction: row;
}

.toolAreaRow1 {
  height: 55px;
  line-height: 45px;
  display: flex;
  flex-direction: row;
}

.toolAreaRow2 {
  line-height: 55px;
  display: flex;
  flex-direction: row;
}

.frequencySlider {
  display: inline-block;
  width: 120px;
  padding-right: 20px;
}

.volumeSlider {
  display: inline-block;
  width: 120px;
  padding-right: 20px;
}

.gridSwitch {
  display: inline-grid;
  padding-right: 10px;
}

.toolAreaLabel {
  font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    white-space: nowrap;
}

.hiddenIcon {
  font-family: Material Icons;
  font-size: 20px;
  font-feature-settings: "liga";
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 16px;


  display: inline-block;
  vertical-align: bottom;
}

#dialogContainer {
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 1000;
}

#dialogContent {
  width: 90%;
  height: 380px;
  margin: 2rem auto;
  background-color: white;
  border-radius: 0.25rem;
  -webkit-border-radius: 0.25rem;
  -moz-border-radius: 0.25rem;
  border: 0.1rem solid rgb(10 124 238);
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  position: absolute;
  left: 50%;
  top: calc(50% + 1rem);
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}

.searchField {
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  width: 120px;
  vertical-align: bottom;
}

.hiddenDrop {
  vertical-align: bottom;
  width: 120px;
  margin-bottom: 6px;
  margin-right: 10px;
  margin-left: 10px;
}
```
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
  // tslint:disable-next-line:object-literal-sort-keys
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
  "KRD_3YR": 0.00006,
  // "RISK_COUNTRY": "",
  "KRD_5YR": 0,
  "KRD_1YR": -0.00187,
}];

export const DataItems: any[] = [
{
 "Category": "Metal",
 "Type": "Gold",
 "Spread": 0.01,
 "Open Price": 1281.10,
 "Price": 1280.7317,
 "Buy": 1280.7267,
 "Sell": 1280.7367,
 "Change": -0.3683,
 "Change(%)": -0.0287,
 "Volume": 48387,
 "High(D)": 1289.50,
 "Low(D)": 1279.10,
 "High(Y)": 1306,
 "Low(Y)": 1047.20,
 "Start(Y)": 1176.60,
 "Change On Year(%)": 8.8502
},
{
 "Category": "Metal",
 "Type": "Silver",
 "Spread": 0.01,
 "Open Price": 17.43,
 "Price": 17.42,
 "Buy": 17.43,
 "Sell": 17.43,
 "Change": -0.01,
 "Change(%)": -0.0574,
 "Volume": 11720,
 "High(D)": 17.51,
 "Low(D)": 17.37,
 "High(Y)": 18.06,
 "Low(Y)": 13.73,
 "Start(Y)": 15.895,
 "Change On Year(%)": 9.5942
},
{
 "Category": "Metal",
 "Type": "Copper",
 "Spread": 0.02,
 "Open Price": 2.123,
 "Price": 2.113,
 "Buy": 2.123,
 "Sell": 2.123,
 "Change": -0.01,
 "Change(%)": -0.471,
 "Volume": 28819,
 "High(D)": 2.16,
 "Low(D)": 2.11,
 "High(Y)": 2.94,
 "Low(Y)": 1.96,
 "Start(Y)": 2.45,
 "Change On Year(%)": -13.7551
},
{
 "Category": "Metal",
 "Type": "Platinum",
 "Spread": 0.01,
 "Open Price": 1071.60,
 "Price": 1071.0993,
 "Buy": 1071.0943,
 "Sell": 1071.1043,
 "Change": -0.5007,
 "Change(%)": -0.0467,
 "Volume": 3039,
 "High(D)": 1081.20,
 "Low(D)": 1070.50,
 "High(Y)": 1120.60,
 "Low(Y)": 812.40,
 "Start(Y)": 966.50,
 "Change On Year(%)": 10.8225
},
{
 "Category": "Metal",
 "Type": "Palladium",
 "Spread": 0.01,
 "Open Price": 600.55,
 "Price": 601.0005,
 "Buy": 600.9955,
 "Sell": 601.0055,
 "Change": 0.4505,
 "Change(%)": 0.075,
 "Volume": 651,
 "High(D)": 607.20,
 "Low(D)": 598.40,
 "High(Y)": 690,
 "Low(Y)": 458.6,
 "Start(Y)": 574.3,
 "Change On Year(%)": 4.6492
},
{
 "Category": "Oil",
 "Type": "Oil",
 "Spread": 0.015,
 "Open Price": 45.54,
 "Price": 45.7899,
 "Buy": 45.7824,
 "Sell": 45.7974,
 "Change": 0.2499,
 "Change(%)": 0.5487,
 "Volume": 107196,
 "High(D)": 45.94,
 "Low(D)": 45.00,
 "High(Y)": 65.28,
 "Low(Y)": 30.79,
 "Start(Y)": 48.035,
 "Change On Year(%)": -4.6739
},
{
 "Category": "Oil",
 "Type": "Brent",
 "Spread": 0.01,
 "Open Price": 46.06,
 "Price": 46.05,
 "Buy": 46.06,
 "Sell": 46.06,
 "Change": -0.01,
 "Change(%)": -0.0217,
 "Volume": 59818,
 "High(D)": 46.48,
 "Low(D)": 45.60,
 "High(Y)": 71.14,
 "Low(Y)": 30.02,
 "Start(Y)": 50.58,
 "Change On Year(%)": -8.9561
},
{
 "Category": "Oil",
 "Type": "Natural Gas",
 "Spread": 0.02,
 "Open Price": 2.094,
 "Price": 2.104,
 "Buy": 2.094,
 "Sell": 2.094,
 "Change": 0.01,
 "Change(%)": 0.4776,
 "Volume": 2783,
 "High(D)": 2.11,
 "Low(D)": 2.09,
 "High(Y)": 3.20,
 "Low(Y)": 1.84,
 "Start(Y)": 2.52,
 "Change On Year(%)": -16.5079
},
{
 "Category": "Oil",
 "Type": "Gas",
 "Spread": 0.015,
 "Open Price": 1.5086,
 "Price": 1.9532,
 "Buy": 1.9457,
 "Sell": 1.9607,
 "Change": 0.4446,
 "Change(%)": 29.4686,
 "Volume": 2646,
 "High(D)": 1.9532,
 "Low(D)": 1.50,
 "High(Y)": 2.05,
 "Low(Y)": 1.15,
 "Start(Y)": 1.60,
 "Change On Year(%)": 22.0727
},
{
 "Category": "Oil",
 "Type": "Diesel",
 "Spread": 0.015,
 "Open Price": 1.3474,
 "Price": 1.3574,
 "Buy": 1.3474,
 "Sell": 1.3474,
 "Change": 0.01,
 "Change(%)": 0.7422,
 "Volume": 2971,
 "High(D)": 1.36,
 "Low(D)": 1.34,
 "High(Y)": 2.11,
 "Low(Y)": 0.92,
 "Start(Y)": 1.515,
 "Change On Year(%)": -10.4026
},
{
 "Category": "Oil",
 "Type": "Ethanol",
 "Spread": 0.01,
 "Open Price": 1.512,
 "Price": 2.7538,
 "Buy": 2.7488,
 "Sell": 2.7588,
 "Change": 1.2418,
 "Change(%)": 82.1323,
 "Volume": 14,
 "High(D)": 2.7538,
 "Low(D)": 1.1168,
 "High(Y)": 2.7538,
 "Low(Y)": 1.1168,
 "Start(Y)": 1.475,
 "Change On Year(%)": 86.7011
},
{
 "Category": "Oil",
 "Type": "Crude",
 "Spread": 0.02,
 "Open Price": 27.55,
 "Price": 27.58,
 "Buy": 27.55,
 "Sell": 27.55,
 "Change": 0.03,
 "Change(%)": 0.1089,
 "Volume": 12,
 "High(D)": 27.55,
 "Low(D)": 27.55,
 "High(Y)": 29.32,
 "Low(Y)": 21.28,
 "Start(Y)": 25.30,
 "Change On Year(%)": 9.0119
},
{
 "Category": "Oil",
 "Type": "Coal",
 "Spread": 0.015,
 "Open Price": 0.4363,
 "Price": 0.4163,
 "Buy": 0.4363,
 "Sell": 0.4363,
 "Change": -0.02,
 "Change(%)": -4.584,
 "Volume": 3,
 "High(D)": 0.4363,
 "Low(D)": 0.4363,
 "High(Y)": 0.4841,
 "Low(Y)": 0.3954,
 "Start(Y)": 0.4398,
 "Change On Year(%)": -5.3326
},
{
 "Category": "Agriculture",
 "Type": "Wheat",
 "Spread": 0.01,
 "Open Price": 465.50,
 "Price": 465.52,
 "Buy": 465.50,
 "Sell": 465.50,
 "Change": 0.02,
 "Change(%)": 0.0043,
 "Volume": 4318,
 "High(D)": 467.00,
 "Low(D)": 463.25,
 "High(Y)": 628.50,
 "Low(Y)": 449.50,
 "Start(Y)": 539.00,
 "Change On Year(%)": -13.6327
},
{
 "Category": "Agriculture",
 "Type": "Corn",
 "Spread": 0.01,
 "Open Price": 379.50,
 "Price": 379.8026,
 "Buy": 379.7976,
 "Sell": 379.8076,
 "Change": 0.3026,
 "Change(%)": 0.0797,
 "Volume": 11266,
 "High(D)": 381.00,
 "Low(D)": 377.75,
 "High(Y)": 471.25,
 "Low(Y)": 351.25,
 "Start(Y)": 411.25,
 "Change On Year(%)": -7.6468
},
{
 "Category": "Agriculture",
 "Type": "Sugar",
 "Spread": 0.01,
 "Open Price": 15.68,
 "Price": 14.6742,
 "Buy": 14.6692,
 "Sell": 14.6792,
 "Change": -1.0058,
 "Change(%)": -6.4146,
 "Volume": 4949,
 "High(D)": 15.70,
 "Low(D)": 14.6742,
 "High(Y)": 16.87,
 "Low(Y)": 11.37,
 "Start(Y)": 14.12,
 "Change On Year(%)": 3.9249
},
{
 "Category": "Agriculture",
 "Type": "Soybean",
 "Spread": 0.01,
 "Open Price": 1038.00,
 "Price": 1038.6171,
 "Buy": 1038.6121,
 "Sell": 1038.6221,
 "Change": 0.6171,
 "Change(%)": 0.0595,
 "Volume": 20356,
 "High(D)": 1044.00,
 "Low(D)": 1031.75,
 "High(Y)": 1057.00,
 "Low(Y)": 859.50,
 "Start(Y)": 958.25,
 "Change On Year(%)": 8.3869
},
{
 "Category": "Agriculture",
 "Type": "Soy oil",
 "Spread": 0.01,
 "Open Price": 33.26,
 "Price": 33.7712,
 "Buy": 33.7662,
 "Sell": 33.7762,
 "Change": 0.5112,
 "Change(%)": 1.5371,
 "Volume": 10592,
 "High(D)": 33.7712,
 "Low(D)": 33.06,
 "High(Y)": 35.43,
 "Low(Y)": 26.61,
 "Start(Y)": 31.02,
 "Change On Year(%)": 8.8692
},
{
 "Category": "Agriculture",
 "Type": "Soy Meat",
 "Spread": 0.01,
 "Open Price": 342.60,
 "Price": 342.62,
 "Buy": 342.60,
 "Sell": 342.60,
 "Change": 0.02,
 "Change(%)": 0.0058,
 "Volume": 5646,
 "High(D)": 345.40,
 "Low(D)": 340.30,
 "High(Y)": 353.40,
 "Low(Y)": 261.70,
 "Start(Y)": 307.55,
 "Change On Year(%)": 11.403
},
{
 "Category": "Agriculture",
 "Type": "OJ Future",
 "Spread": 0.01,
 "Open Price": 140.60,
 "Price": 140.1893,
 "Buy": 140.1843,
 "Sell": 140.1943,
 "Change": -0.4107,
 "Change(%)": -0.2921,
 "Volume": 7,
 "High(D)": 140.1893,
 "Low(D)": 0.00,
 "High(Y)": 155.95,
 "Low(Y)": 113.00,
 "Start(Y)": 134.475,
 "Change On Year(%)": 4.2493
},
{
 "Category": "Agriculture",
 "Type": "Coffee",
 "Spread": 0.01,
 "Open Price": 125.70,
 "Price": 125.69,
 "Buy": 125.70,
 "Sell": 125.70,
 "Change": -0.01,
 "Change(%)": -0.008,
 "Volume": 1654,
 "High(D)": 125.80,
 "Low(D)": 125.00,
 "High(Y)": 155.75,
 "Low(Y)": 115.35,
 "Start(Y)": 135.55,
 "Change On Year(%)": -7.2741
},
{
 "Category": "Agriculture",
 "Type": "Cocoa",
 "Spread": 0.01,
 "Open Price": 3076.00,
 "Price": 3076.03,
 "Buy": 3076.00,
 "Sell": 3076.00,
 "Change": 0.03,
 "Change(%)": 0.001,
 "Volume": 978,
 "High(D)": 3078.00,
 "Low(D)": 3066.00,
 "High(Y)": 3406.00,
 "Low(Y)": 2746.00,
 "Start(Y)": 3076.00,
 "Change On Year(%)": 0.001
},
{
 "Category": "Agriculture",
 "Type": "Rice",
 "Spread": 0.01,
 "Open Price": 11.245,
 "Price": 10.4154,
 "Buy": 10.4104,
 "Sell": 10.4204,
 "Change": -0.8296,
 "Change(%)": -7.3779,
 "Volume": 220,
 "High(D)": 11.38,
 "Low(D)": 10.4154,
 "High(Y)": 14.14,
 "Low(Y)": 9.70,
 "Start(Y)": 11.92,
 "Change On Year(%)": -12.6228
},
{
 "Category": "Agriculture",
 "Type": "Oats",
 "Spread": 0.01,
 "Open Price": 194.50,
 "Price": 194.2178,
 "Buy": 194.2128,
 "Sell": 194.2228,
 "Change": -0.2822,
 "Change(%)": -0.1451,
 "Volume": 64,
 "High(D)": 195.75,
 "Low(D)": 194.00,
 "High(Y)": 241.25,
 "Low(Y)": 183.75,
 "Start(Y)": 212.50,
 "Change On Year(%)": -8.6034
},
{
 "Category": "Agriculture",
 "Type": "Milk",
 "Spread": 0.01,
 "Open Price": 12.87,
 "Price": 12.86,
 "Buy": 12.87,
 "Sell": 12.87,
 "Change": -0.01,
 "Change(%)": -0.0777,
 "Volume": 7,
 "High(D)": 12.89,
 "Low(D)": 12.81,
 "High(Y)": 16.96,
 "Low(Y)": 12.81,
 "Start(Y)": 14.885,
 "Change On Year(%)": -13.6043
},
{
 "Category": "Agriculture",
 "Type": "Cotton",
 "Spread": 0.01,
 "Open Price": 61.77,
 "Price": 61.76,
 "Buy": 61.77,
 "Sell": 61.77,
 "Change": -0.01,
 "Change(%)": -0.0162,
 "Volume": 3612,
 "High(D)": 62.06,
 "Low(D)": 61.32,
 "High(Y)": 67.59,
 "Low(Y)": 54.33,
 "Start(Y)": 60.96,
 "Change On Year(%)": 1.3123
},
{
 "Category": "Agriculture",
 "Type": "Lumber",
 "Spread": 0.01,
 "Open Price": 303.90,
 "Price": 304.5994,
 "Buy": 304.5944,
 "Sell": 304.6044,
 "Change": 0.6994,
 "Change(%)": 0.2302,
 "Volume": 2,
 "High(D)": 304.5994,
 "Low(D)": 303.90,
 "High(Y)": 317.10,
 "Low(Y)": 236.00,
 "Start(Y)": 276.55,
 "Change On Year(%)": 10.1426
},
{
 "Category": "Livestock",
 "Type": "LV Cattle",
 "Spread": 0.01,
 "Open Price": 120.725,
 "Price": 120.705,
 "Buy": 120.725,
 "Sell": 120.725,
 "Change": -0.02,
 "Change(%)": -0.0166,
 "Volume": 4,
 "High(D)": 120.725,
 "Low(D)": 120.725,
 "High(Y)": 147.98,
 "Low(Y)": 113.90,
 "Start(Y)": 130.94,
 "Change On Year(%)": -7.8166
},
{
 "Category": "Livestock",
 "Type": "FD Cattle",
 "Spread": 0.01,
 "Open Price": 147.175,
 "Price": 148.6065,
 "Buy": 148.6015,
 "Sell": 148.6115,
 "Change": 1.4315,
 "Change(%)": 0.9727,
 "Volume": 5,
 "High(D)": 148.6065,
 "Low(D)": 147.175,
 "High(Y)": 190.00,
 "Low(Y)": 138.10,
 "Start(Y)": 164.05,
 "Change On Year(%)": -9.4139
},
{
 "Category": "Livestock",
 "Type": "Lean Hogs",
 "Spread": 0.01,
 "Open Price": 81.275,
 "Price": 81.8146,
 "Buy": 81.8096,
 "Sell": 81.8196,
 "Change": 0.5396,
 "Change(%)": 0.664,
 "Volume": 1,
 "High(D)": 81.8146,
 "Low(D)": 81.275,
 "High(Y)": 83.98,
 "Low(Y)": 70.25,
 "Start(Y)": 77.115,
 "Change On Year(%)": 6.0943
},
{
 "Category": "Currencies",
 "Type": "USD IDX Future",
 "Spread": 0.02,
 "Open Price": 93.88,
 "Price": 93.7719,
 "Buy": 93.7619,
 "Sell": 93.7819,
 "Change": -0.1081,
 "Change(%)": -0.1151,
 "Volume": 5788,
 "High(D)": 94.05,
 "Low(D)": 93.7534,
 "High(Y)": 100.70,
 "Low(Y)": 91.88,
 "Start(Y)": 96.29,
 "Change On Year(%)": -2.6151
},
{
 "Category": "Currencies",
 "Type": "USD/JPY Future",
 "Spread": 0.02,
 "Open Price": 9275.50,
 "Price": 9277.3342,
 "Buy": 9277.3242,
 "Sell": 9277.3442,
 "Change": 1.8342,
 "Change(%)": 0.0198,
 "Volume": 47734,
 "High(D)": 9277.3342,
 "Low(D)": 0.93,
 "High(Y)": 9483.00,
 "Low(Y)": 0.93,
 "Start(Y)": 4741.965,
 "Change On Year(%)": 95.6432
},
{
 "Category": "Currencies",
 "Type": "GBP/USD Future",
 "Spread": 0.02,
 "Open Price": 1.4464,
 "Price": 1.1941,
 "Buy": 1.1841,
 "Sell": 1.2041,
 "Change": -0.2523,
 "Change(%)": -17.4441,
 "Volume": 29450,
 "High(D)": 1.45,
 "Low(D)": 1.1941,
 "High(Y)": 1.59,
 "Low(Y)": 1.1941,
 "Start(Y)": 1.485,
 "Change On Year(%)": -19.59
},
{
 "Category": "Currencies",
 "Type": "AUD/USD Future",
 "Spread": 0.02,
 "Open Price": 0.7344,
 "Price": 0.7444,
 "Buy": 0.7344,
 "Sell": 0.7344,
 "Change": 0.01,
 "Change(%)": 1.3617,
 "Volume": 36764,
 "High(D)": 0.74,
 "Low(D)": 0.73,
 "High(Y)": 0.79,
 "Low(Y)": 0.68,
 "Start(Y)": 0.735,
 "Change On Year(%)": 1.2789
},
{
 "Category": "Currencies",
 "Type": "USD/CAD Future",
 "Spread": 0.02,
 "Open Price": 0.7744,
 "Price": 0.9545,
 "Buy": 0.9445,
 "Sell": 0.9645,
 "Change": 0.1801,
 "Change(%)": 23.2622,
 "Volume": 13669,
 "High(D)": 0.9545,
 "Low(D)": 0.77,
 "High(Y)": 0.9545,
 "Low(Y)": 0.68,
 "Start(Y)": 0.755,
 "Change On Year(%)": 26.4295
},
{
 "Category": "Currencies",
 "Type": "USD/CHF Future",
 "Spread": 0.02,
 "Open Price": 1.0337,
 "Price": 1.0437,
 "Buy": 1.0337,
 "Sell": 1.0337,
 "Change": 0.01,
 "Change(%)": 0.9674,
 "Volume": 5550,
 "High(D)": 1.03,
 "Low(D)": 1.03,
 "High(Y)": 1.11,
 "Low(Y)": 0.98,
 "Start(Y)": 1.045,
 "Change On Year(%)": -0.1244
},
{
 "Category": "Index",
 "Type": "DOW Future",
 "Spread": 0.01,
 "Open Price": 17711.00,
 "Price": 17712.1515,
 "Buy": 17712.1465,
 "Sell": 17712.1565,
 "Change": 1.1515,
 "Change(%)": 0.0065,
 "Volume": 22236,
 "High(D)": 17727.00,
 "Low(D)": 17642.00,
 "High(Y)": 18083.00,
 "Low(Y)": 15299.00,
 "Start(Y)": 16691.00,
 "Change On Year(%)": 6.118
},
{
 "Category": "Index",
 "Type": "S&P Future",
 "Spread": 0.01,
 "Open Price": 2057.50,
 "Price": 2056.6018,
 "Buy": 2056.5968,
 "Sell": 2056.6068,
 "Change": -0.8982,
 "Change(%)": -0.0437,
 "Volume": 142780,
 "High(D)": 2059.50,
 "Low(D)": 2049.00,
 "High(Y)": 2105.50,
 "Low(Y)": 1794.50,
 "Start(Y)": 1950.00,
 "Change On Year(%)": 5.4668
},
{
 "Category": "Index",
 "Type": "NAS Future",
 "Spread": 0.01,
 "Open Price": 4341.25,
 "Price": 4341.28,
 "Buy": 4341.25,
 "Sell": 4341.25,
 "Change": 0.03,
 "Change(%)": 0.0007,
 "Volume": 18259,
 "High(D)": 4347.00,
 "Low(D)": 4318.00,
 "High(Y)": 4719.75,
 "Low(Y)": 3867.75,
 "Start(Y)": 4293.75,
 "Change On Year(%)": 1.107
},
{
 "Category": "Index",
 "Type": "S&P MID MINI",
 "Spread": 0.01,
 "Open Price": 1454.30,
 "Price": 1455.7812,
 "Buy": 1455.7762,
 "Sell": 1455.7862,
 "Change": 1.4812,
 "Change(%)": 0.1018,
 "Volume": 338,
 "High(D)": 1455.7812,
 "Low(D)": 1448.00,
 "High(Y)": 1527.30,
 "Low(Y)": 1236.00,
 "Start(Y)": 1381.65,
 "Change On Year(%)": 5.3654
},
{
 "Category": "Index",
 "Type": "S&P 600 MINI",
 "Spread": 0.01,
 "Open Price": 687.90,
 "Price": 687.88,
 "Buy": 687.90,
 "Sell": 687.90,
 "Change": -0.02,
 "Change(%)": -0.0029,
 "Volume": 0,
 "High(D)": 0.00,
 "Low(D)": 0.00,
 "High(Y)": 620.32,
 "Low(Y)": 595.90,
 "Start(Y)": 608.11,
 "Change On Year(%)": 13.1177
},
{
 "Category": "Interest Rate",
 "Type": "US 30YR Future",
 "Spread": 0.01,
 "Open Price": 164.875,
 "Price": 164.1582,
 "Buy": 164.1532,
 "Sell": 164.1632,
 "Change": -0.7168,
 "Change(%)": -0.4347,
 "Volume": 28012,
 "High(D)": 165.25,
 "Low(D)": 164.0385,
 "High(Y)": 169.38,
 "Low(Y)": 151.47,
 "Start(Y)": 160.425,
 "Change On Year(%)": 2.3271
},
{
 "Category": "Interest Rate",
 "Type": "US 2Y Future",
 "Spread": 0.01,
 "Open Price": 109.3984,
 "Price": 109.3884,
 "Buy": 109.3984,
 "Sell": 109.3984,
 "Change": -0.01,
 "Change(%)": -0.0091,
 "Volume": 17742,
 "High(D)": 109.41,
 "Low(D)": 109.38,
 "High(Y)": 109.80,
 "Low(Y)": 108.62,
 "Start(Y)": 109.21,
 "Change On Year(%)": 0.1634
},
{
 "Category": "Interest Rate",
 "Type": "US 10YR Future",
 "Spread": 0.01,
 "Open Price": 130.5625,
 "Price": 130.5825,
 "Buy": 130.5625,
 "Sell": 130.5625,
 "Change": 0.02,
 "Change(%)": 0.0153,
 "Volume": 189310,
 "High(D)": 130.63,
 "Low(D)": 130.44,
 "High(Y)": 132.64,
 "Low(Y)": 125.48,
 "Start(Y)": 129.06,
 "Change On Year(%)": 1.1797
},
{
 "Category": "Interest Rate",
 "Type": "Euro$ 3M",
 "Spread": 0.01,
 "Open Price": 99.18,
 "Price": 99.17,
 "Buy": 99.18,
 "Sell": 99.18,
 "Change": -0.01,
 "Change(%)": -0.0101,
 "Volume": 29509,
 "High(D)": 99.18,
 "Low(D)": 99.17,
 "High(Y)": 99.38,
 "Low(Y)": 98.41,
 "Start(Y)": 98.895,
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

  public static randomizeDataValues(item: any): void {
      const changeP = "Change(%)";
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

  public static getRandomDate(): Date {
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DataGridBindingLiveData.css';
import { LiveFinancialData } from './LiveFinancialData';
// IgrDataGrid modules
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrDataGridToolbar } from 'igniteui-react-data-grids';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGridToolbarModule } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrTemplateColumn } from 'igniteui-react-data-grids';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrItemToolTipLayer } from 'igniteui-react-charts';
import { IgrColumnGroupDescription } from 'igniteui-react-data-grids';
import { IgrDataBindingEventArgs } from 'igniteui-react-data-grids';
import { IgrCellStyleRequestedEventArgs } from 'igniteui-react-data-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-data-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-data-grids';
import { FilterFactory } from 'igniteui-react-core';
import { ListSortDirection } from 'igniteui-react-core';
import { HeaderClickAction } from 'igniteui-react-data-grids';
// IgrDataChart modules
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrNumericYAxis } from 'igniteui-react-charts';
// other modules
import { IgrButton } from 'igniteui-react';
import { IgrInput } from 'igniteui-react';
import { IgrSwitch } from 'igniteui-react';
import { IgrSlider } from 'igniteui-react';

import { IgrButtonModule } from 'igniteui-react';
import { IgrInputModule } from 'igniteui-react';
import { IgrSwitchModule } from 'igniteui-react';
import { IgrSliderModule } from 'igniteui-react';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDataGridModule.register();
IgrDataGridToolbarModule.register();
IgrDataChartAnnotationModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();
IgrButtonModule.register();
IgrInputModule.register();
IgrSwitchModule.register();
IgrSliderModule.register();

interface AppState {
    name: string;
    data: any[];
    liveSomePricesDisabled: boolean;
    liveSomePricesText: string;
    liveAllPricesDisabled: boolean;
    liveAllPricesText: string;
    frequency: number;
    volume: number;
    canvasChecked: boolean;
    groupingChecked: boolean;
    heatChecked: boolean;
    chartOpen: boolean;
    pricesByCountry: any[];
    hiddenColumns: string[];
    allColumns: string[];
}

export default class DataGridBindingLiveData extends React.Component<any, AppState> {

    public chart: IgrDataChart;
    public grid: IgrDataGrid;
    public toolbar: IgrDataGridToolbar;
    public recordsUpdatedLastSecond: number[];
    public lastUpdateTime: Date = new Date();
    public isTimerTicking: boolean = false;
    public isUpdatingAllPrices = false;
    public isUpdatingSomePrices = false;
    public valuesIncreasedColor = "#4EB862";
    public valuesDecreasedColor = "#FF134A";
    public valuesDecreasedBorder = "4px solid #FF134A";
    public valuesIncreasedBorder = "4px solid #4EB862";

    constructor(props: any) {
        super(props);

        this.state = {
            name: 'React',
            data: LiveFinancialData.generateData(1000),
            liveSomePricesDisabled: false,
            liveSomePricesText: "Live Prices",
            liveAllPricesDisabled: false,
            liveAllPricesText: "Live All Prices",
            frequency: 100,
            volume: 1000,
            canvasChecked: false,
            groupingChecked: true,
            heatChecked: true,
            chartOpen: false,
            pricesByCountry: [],
            hiddenColumns: ["ID"],
            allColumns: []
        };
    }

    public render(): JSX.Element {
        let buttonStyle: any = { height: "2rem", marginLeft: "10px", marginBottom: "-10px", width: "160px", whiteSpace: "nowrap" };
        let labelStyle: any = { fontSize: "0.8rem", marginTop: "0px", marginLeft: "0px" };
        let iconStyle: any = { paddingLeft: "20px", paddingTop: "5px" };

        return (
            <div className="container sample">

                <div className="toolAreaRow">
                    <div className="toolAreaColumn">
                        <IgrButton variant="contained" style={buttonStyle}
                            disabled={this.state.liveSomePricesDisabled}
                            onClick={this.onLiveSomePricesClicked} >
                                <span>{this.state.liveSomePricesText}</span>
                        </IgrButton>
                        <label>&nbsp;</label>
                        <IgrButton variant="contained" style={buttonStyle}
                        disabled={this.state.liveAllPricesDisabled}
                        onClick={this.onLiveAllPricesClicked} >
                            <span>{this.state.liveAllPricesText}</span>
                        </IgrButton>
                        <label>&nbsp;</label>
                        <IgrButton variant="contained" style={buttonStyle}
                        onClick={this.onChartClicked} >
                            <span>Chart</span>
                        </IgrButton>
                    </div>

                    <div className="toolAreaColumn">
                        <div className="frequencySlider">
                                <label id="label">Frequency: {this.state.frequency / 1000}s</label>
                                <IgrSlider
                                    min={100}
                                    max={1000}
                                    step={100}
                                    className="options-slider"
                                    value={this.state.frequency}
                                    onChange={this.onPriceFrequencyChanged}/>
                        </div>
                        <div className="volumeSlider">
                            <label id="label">Volume: {this.state.volume / 1000}k</label>
                            <IgrSlider
                                min={100}
                                max={10000}
                                step={100}
                                className="options-slider"
                                value={this.state.volume}
                                onChange={this.onPriceVolumeChanged}/>
                        </div>
                    </div>

                    <div className="toolAreaColumn">
                        <div className="toolAreaRow">
                            <div className="gridSwitch">
                                <label id="label">Canvas</label>
                                <IgrSwitch checked={this.state.canvasChecked}
                                    onChange={this.onGridCanvasModeChanged}
                                    value="canvas" />
                            </div>
                            <div className="gridSwitch">
                                <label id="label">Grouping</label>
                                <IgrSwitch checked={this.state.groupingChecked}
                                    onChange={this.onGridGroupingChanged}
                                    value="grouping" />
                            </div>
                            <div className="gridSwitch">
                                <label id="label">Heat</label>
                                <IgrSwitch checked={this.state.heatChecked}
                                    onChange={this.onGridHeatModeChanged}
                                    value="heat" />
                            </div>
                        </div>
                        <div className="toolAreaRow" style={{paddingTop: "25px"}}>
                            <IgrInput onInput={this.onGridSearchChanged} placeholder="Search" type="text" />
                        </div>
                    </div>
                </div>

                <IgrDataGridToolbar
                    ref={this.onToolbarRef}
                    columnChooser="true" />
                <IgrDataGrid
                ref={this.onGridRef}
                width="100%"
                height="calc(100% - 120px)"
                key={this.state.canvasChecked ? "canvasGrid" : "domGrid" }
                useCanvas={this.state.canvasChecked}
                rowHeight="32"
                selectionMode="MultipleRow"
                autoGenerateColumns="false"
                isGroupCollapsable="true"
                headerClickAction={HeaderClickAction.SortByMultipleColumnsTriState}
                columnShowingAnimationMode="slideFromRightAndFadeIn"
                columnHidingAnimationMode="slideToRightAndFadeOut"
                dataSource={this.state.data}
                defaultColumnMinWidth="100"
                isRowHoverEnabled="false">
                    <IgrTextColumn field="ID" width="*>90" isHidden="true"/>
                    <IgrTextColumn field="Category" width="*>130" />
                    <IgrTextColumn field="Type" width="*>100"    />
                    <IgrTextColumn field="Risk" width="*>100" />
                    <IgrNumericColumn field="Open Price" width="*>140"/>
                    <IgrTemplateColumn field="Price" width="*>100"
                        horizontalAlignment="right"
                        cellStyleKeyRequested={this.onPriceStyleKey}
                        cellUpdating={this.onPriceCellUpdating}
                        dataBound={this.onPriceDataBound}/>

                    <IgrTemplateColumn field="Change" width=">*100"
                        horizontalAlignment="right"
                        cellStyleKeyRequested={this.onPriceAmountStyleKey}
                        cellUpdating={this.onPriceAmountCellUpdating}/>

                    <IgrTemplateColumn name="ChangePer" field="Change(%)" width="*>150"
                        horizontalAlignment="right"
                        cellStyleKeyRequested={this.onPricePercentStyleKey}
                        cellUpdating={this.onPricePercentCellUpdating}/>

                    <IgrTextColumn field="Contract" width="*>120" />
                    <IgrTextColumn field="Settlement" width="*>140" />
                    <IgrTextColumn field="Region" width="*>130" />
                    <IgrTextColumn field="Country" width="*>120" />
                    {/* TODO open chart on clicking a cell in the Chart column */}
                    {/* <IgrTemplateColumn field="Chart" width="*>90"
                        cellStyleKeyRequested={this.onChartStyleKey}
                        cellUpdating={this.onChartCellUpdating}/>
                    <IgrTemplateColumn field="Grid" width="*>90"
                        cellStyleKeyRequested={this.onGridStyleKey}
                        cellUpdating={this.onGridCellUpdating} /> */}
                    <IgrTextColumn field="IndGroup" headerText="Group" width="*>110" />
                    <IgrTextColumn field="IndSector" headerText="Industry" width="*>120"/>
                    <IgrTextColumn field="IndCategory" headerText="Category" width="*>130" />
                    <IgrTextColumn field="Sector" width="*>110" />
                    <IgrTextColumn field="Issuer" width="*>170"/>
                    <IgrTextColumn field="Rating" width="*>110" />
                    <IgrTextColumn field="Currency" width="*>130" />
                    <IgrTextColumn field="Security" width="*>120" />
                    <IgrNumericColumn field="Transactions" width="*>150" />
                    <IgrNumericColumn field="CPN" width="*>90" />
                    <IgrTextColumn field="Maturity" width="*>120" />
                    <IgrTextColumn field="Collateral" width="*>130" />
                    <IgrNumericColumn field="Buy" width="*>110"/>
                    <IgrNumericColumn field="Sell" width="*>110"/>
                    <IgrNumericColumn field="Spread" width="*>110"/>
                    <IgrNumericColumn field="Volume" width="*>120"/>
                    <IgrNumericColumn field="High(D)" width="*>120"/>
                    <IgrNumericColumn field="Low(D)" width="*>120"/>
                    <IgrNumericColumn field="High(Y)" width="*>120"/>
                    <IgrNumericColumn field="Low(Y)" width="*>110"/>
                    <IgrNumericColumn field="Start(Y)" width="*>120"/>
                    <IgrNumericColumn field="KRD_3YR" width="*>130" />
                    <IgrNumericColumn field="KRD_5YR" width="*>130" />
                    <IgrNumericColumn field="KRD_1YR" width="*>130" />
                </IgrDataGrid>

                <div id="dialogContainer">
                    <div id="dialogContent">
                        <IgrButton onClick={this.onChartClose}>
                            <span>Close</span>
                        </IgrButton>
                        <IgrDataChart
                            width="100%"
                            height="350px"
                            chartTitle="Data Chart with Prices By Country"
                            titleTopMargin={10}
                            ref={this.onChartRef} />
                    </div>
                </div>
            </div>
        );
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        let oldRef = this.grid;
        if (oldRef) {
            oldRef.flush();
        }
        this.grid = grid;
        if (!this.grid) {
            return;
        }

        if (this.state.groupingChecked) {
            this.onGridGroupingAdd();
        }

        let columns = [];
        for (let i = 0; i < this.grid.actualColumns.count; i++) {
            let col = this.grid.actualColumns.item(i);

            let name = col.name || col.field;
            columns.push(name);
        }
        this.setState({ allColumns: columns });
    }

    public onToolbarRef = (toolbar: IgrDataGridToolbar) => {
        this.toolbar = toolbar;
        if (this.toolbar) {
            this.toolbar.targetGrid = this.grid;
        }
    }

    public onTimerTick = () =>
    {
        if (!this.isTimerTicking) {
            return;
        }
        if (!this.grid) {
            window.setTimeout(() => this.onTimerTick(), 16);
            return;
        }

        let toChangeIndexes: Record<string, boolean> = {};
        let toChange = Math.round(this.state.volume / 10);
        let stillAnimating = false;

        for (const item of this.state.data) {
            if (item.PriceHeat !== 0)
            {
                stillAnimating = true;
            }
        }

        let now = new Date();
        let intervalElapsed = false;
        if ((+now - +this.lastUpdateTime) > this.state.frequency) {
            intervalElapsed = true;
        }

        let useClear = this.isUpdatingAllPrices;
        let updateAll = this.isUpdatingAllPrices;

        if (updateAll) {
            toChange = this.state.data.length;
        }

        let sortingByPrice = false;
        for (let i = 0; i < this.grid.sortDescriptions.count; i++) {
            if (this.grid.sortDescriptions.item(i).field === "Price" ||
            this.grid.sortDescriptions.item(i).field.indexOf("Change") >= 0) {
                sortingByPrice = true;
            }
        }

        let changing = false;
        if (intervalElapsed)
        {
            this.lastUpdateTime = new Date();
            for (let i = 0; i < toChange; i++)
            {
                let index = Math.round(Math.random() * this.state.data.length - 1);
                while (toChangeIndexes[index.toString()] !== undefined)
                {
                    index = Math.round(Math.random() * this.state.data.length - 1);
                }
                toChangeIndexes[index.toString()] = true;
                changing = true;
            }
        }

        for (let i = 0; i < this.state.data.length; i++)
        {
            let item = this.state.data[i];
            if (toChangeIndexes[i.toString()] !== undefined)
            {
                if (sortingByPrice && !useClear) {

                this.grid.notifyRemoveItem(i, item);
                LiveFinancialData.randomizeDataValues(item);
                this.grid.notifyInsertItem(i, item);
                } else {
                    LiveFinancialData.randomizeDataValues(item);
                }

                if (item.Change > 0) {
                    // item.YearToDateSales += Math.round(Math.random() * 4.0);
                    item.PriceHeat = 1;
                } else {
                    item.PriceHeat = -1;
                }
            }
            else
            {
                if (item.PriceHeat > 0)
                {
                    item.PriceHeat -= .06;
                    if (item.PriceHeat < 0)
                    {
                        item.PriceHeat = 0;
                    }
                }
                if (item.PriceHeat < 0) {
                    item.PriceHeat += .06;
                    if (item.PriceHeat > 0) {
                        item.PriceHeat = 0;
                    }
                }
            }
        }

        if (sortingByPrice && useClear && intervalElapsed) {
            this.grid.actualDataSource.queueAutoRefresh();
        }

        // if (!useClear) {
        if (!sortingByPrice || !intervalElapsed) {
            this.grid.invalidateVisibleRows();
        }
        // }
        // this.grid.invalidateVisibleRows();

        if (intervalElapsed && this.state.chartOpen) {
            this.updatePricesByCountry();
            this.chart.notifyClearItems(this.state.pricesByCountry);
        }

        window.setTimeout(() => this.onTimerTick(), 16);
    }

    public updatePricesByCountry = () => {
        let shouldPopulate = false;
        if (this.state.pricesByCountry.length === 0) {
            shouldPopulate = true;
        }

        let pricesByCountry = new Map<string, number>();
        let countryNames = [];

        for (const item of this.state.data) {
            const country = item.Country;
            if (!country) {
                continue;
            }
            if (!pricesByCountry.has(country)) {
                pricesByCountry.set(country, 0);
                if (shouldPopulate) {

                    countryNames.push(country);
                }
            }
            let currVal = pricesByCountry.get(country);
            // if (currVal !== 0) {
                currVal += item.Price;
                currVal = Math.round(currVal * 100.0) / 100.0;
                pricesByCountry.set(country, currVal);
            // }
        }

        if (shouldPopulate) {

            countryNames = countryNames.sort();
            let dataByCountry = this.state.pricesByCountry;
            for (const name of countryNames) {
                dataByCountry.push({
                    Country: name,
                    Price: pricesByCountry.get(name)
                })
            }
            this.setState({ pricesByCountry: dataByCountry});
        } else {
            let dataByCountry = this.state.pricesByCountry;
            for (let i = 0; i < dataByCountry.length; i++) {
                const country = dataByCountry[i].Country
                dataByCountry[i].Price = pricesByCountry.get(country);
            }
            this.setState({ pricesByCountry: dataByCountry});
        }
    }

    // cellStyleKeyRequested?: (s: IgrDefinitionBase, e: IgrCellStyleRequestedEventArgs) => void;
    public onPriceStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        let row: any | null = null;
        if (this.grid) {
            row = this.grid.actualDataSource.getItemAtIndex(args.rowNumber);
        } else {
            row = this.state.data[args.rowNumber];
        }
        if (row.Change >= 0) {
            args.styleKey = "priceShiftUp";
        } else {
            args.styleKey = "priceShiftDown";
        }
    }

    public onPriceCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        let item = args.cellInfo.rowItem;
        let priceShiftUp = item.Change >= 0;
        let templ = args.cellInfo as IgrTemplateCellInfo;

        if (args.isCanvasBased) {
            let resized = args.ensureCorrectSize();
            if (resized || args.cellInfo.isContentDirty) {
                args.renderStandardBackground();

                let context: CanvasRenderingContext2D = args.context;

                let iconText = "trending_up";
                let iconColor = this.valuesIncreasedColor;

                let scale = window.devicePixelRatio;
                if (scale !== 1.0) {
                    context.save();
                    context.scale(scale, scale);
                }

                if (priceShiftUp) {
                    iconText = "trending_up";
                    iconColor = this.valuesIncreasedColor;
                } else {
                    iconText = "trending_down";
                    iconColor = this.valuesDecreasedColor;
                }

                // context.fillStyle = "blue";
                // context.fillRect(0,0,args.cellInfo.width,args.cellInfo.height);
                let txt = "$" + (+templ.value).toFixed(2);
                context.font = "13px Verdana";
                let width = context.measureText(txt).width;

                context.font = "13px 'Material Icons'";
                let iconWidth = context.measureText(iconText).width;

                let totalWidth = width + iconWidth;
                context.font = "13px Verdana";
                context.fillStyle = iconColor;
                context.textBaseline = "top";
                context.fillText(txt, templ.width - (totalWidth + 5), (templ.height / 2.0) - 7);

                context.font = "13px 'Material Icons'";
                context.fillStyle = iconColor;
                context.textBaseline = "top";
                context.fillText(iconText, templ.width - (iconWidth + 5), (templ.height / 2.0) - 7);

                if (scale !== 1.0) {
                    context.restore();
                }
            }

            return;
        }

        let content = args.content as HTMLDivElement;
        let sp: HTMLSpanElement;
        let icon: HTMLSpanElement;

        if (content.childElementCount > 0) {
            sp = content.children[0] as HTMLSpanElement;
            icon = content.children[1] as HTMLSpanElement;
        } else {
            content.style.textAlign = "right";
            sp = document.createElement("span");
            icon = document.createElement("span");
            sp.style.font = "13px Verdana";
            sp.style.verticalAlign = "center";
            content.appendChild(sp);
            content.appendChild(icon);
            icon.style.fontFamily = "Material Icons";
            icon.style.fontSize = "13px";
            icon.style.fontFeatureSettings = "liga";
            icon.style.verticalAlign = "center";
        }

        sp.textContent = "$" + (+templ.value).toFixed(2);

        if ((sp as any).__isUp === undefined ||
            (sp as any).__isUp !== priceShiftUp) {
            (sp as any).__isUp = priceShiftUp;
            if (priceShiftUp) {
                icon.textContent = "trending_up";
                icon.style.color = this.valuesIncreasedColor;
                sp.style.color = this.valuesIncreasedColor;
            } else {
                icon.textContent = "trending_down";
                icon.style.color = this.valuesDecreasedColor;
                sp.style.color = this.valuesDecreasedColor;
            }
        }
    }

    public onPricePercentStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        if (args.resolvedValue >= 0) {
            args.styleKey = "pricePercentUp";
        } else {
            args.styleKey = "pricePercentDown";
        }
    }

    public onPricePercentCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        let templ = args.cellInfo as IgrTemplateCellInfo;
        let priceShiftUp = templ.value >= 0;

        if (args.isCanvasBased) {
            let resized = args.ensureCorrectSize();
            if (resized || args.cellInfo.isContentDirty) {
                args.renderStandardBackground();

                let context: CanvasRenderingContext2D = args.context;

                let iconColor = this.valuesIncreasedColor;

                let scale = window.devicePixelRatio;
                if (scale !== 1.0) {
                    context.save();
                    context.scale(scale, scale);
                }

                if (priceShiftUp) {
                    iconColor = this.valuesIncreasedColor;
                } else {
                    iconColor = this.valuesDecreasedColor;
                }

                // context.fillStyle = "blue";
                // context.fillRect(0,0,args.cellInfo.width,args.cellInfo.height);
                let txt = (+templ.value).toFixed(2) + "%";
                context.font = "13px Verdana";
                let width = context.measureText(txt).width;

                let totalWidth = width + 4;

                context.font = "13px Verdana";
                context.fillStyle = templ.textColor;
                context.textBaseline = "top";
                context.fillText(txt, templ.width - (totalWidth + 10), (templ.height / 2.0) - 7);

                context.font = "13px 'Material Icons'";
                context.fillStyle = iconColor;
                context.fillRect(templ.width - (5 + 4), (templ.height / 2.0) - 8, 4, 16);

                 if (scale !== 1.0) {
                    context.restore();
                }
            }

            return;
        }

        let content = args.content as HTMLDivElement;
        let sp: HTMLSpanElement;

        if (content.childElementCount > 0) {
            sp = content.children[0] as HTMLSpanElement;
        } else {
            content.style.textAlign = "right";
            sp = document.createElement("span");
            sp.style.font = "13px Verdana";
            sp.style.verticalAlign = "center";
            content.appendChild(sp);
        }

        sp.textContent = (+templ.value).toFixed(2) + "%";
        if ((sp as any).__isUp === undefined ||
            (sp as any).__isUp !== priceShiftUp) {
            (sp as any).__isUp = priceShiftUp;
            if (priceShiftUp) {
                sp.style.paddingRight = "5px";
                sp.style.borderRight = this.valuesIncreasedBorder;
                // sp.style.color = this.valuesIncreasedColor;
            } else {
                sp.style.paddingRight = "5px";
                sp.style.borderRight = this.valuesDecreasedBorder;
                // sp.style.color = this.valuesDecreasedColor;
            }
        }
    }

    public onPriceAmountStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        if (args.resolvedValue >= 0) {
            args.styleKey = "priceAmountUp";
        } else {
            args.styleKey = "priceAmountDown";
        }
    }

    public onPriceAmountCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        let templ = args.cellInfo as IgrTemplateCellInfo;
        let priceShiftUp = templ.value >= 0;

        if (args.isCanvasBased) {
            let resized = args.ensureCorrectSize();
            if (resized || args.cellInfo.isContentDirty) {
                args.renderStandardBackground();

                let context: CanvasRenderingContext2D = args.context;
                let iconColor = this.valuesIncreasedColor;
                let scale = window.devicePixelRatio;
                if (scale !== 1.0) {
                    context.save();
                    context.scale(scale, scale);
                }

                if (priceShiftUp) {
                    iconColor = this.valuesIncreasedColor;
                } else {
                    iconColor = this.valuesDecreasedColor;
                }

                // context.fillStyle = "blue";
                // context.fillRect(0,0,args.cellInfo.width,args.cellInfo.height);
                let txt = (+templ.value).toFixed(2);
                context.font = "13px Verdana";
                let width = context.measureText(txt).width;

                let totalWidth = width + 4;
                context.font = "13px Verdana";
                context.fillStyle = templ.textColor;
                context.textBaseline = "top";
                context.fillText(txt, templ.width - (totalWidth + 10), (templ.height / 2.0) - 7);

                context.font = "13px 'Material Icons'";
                context.fillStyle = iconColor;
                context.fillRect(templ.width - (5 + 4), (templ.height / 2.0) - 8, 4, 16);

                 if (scale !== 1.0) {
                    context.restore();
                }
            }

            return;
        }

        let content = args.content as HTMLDivElement;
        let sp: HTMLSpanElement;

        if (content.childElementCount > 0) {
            sp = content.children[0] as HTMLSpanElement;
        } else {
            content.style.textAlign = "right";
            sp = document.createElement("span");
            sp.style.font = "13px Verdana";
            sp.style.verticalAlign = "center";
            content.appendChild(sp);
        }

        sp.textContent = (+templ.value).toFixed(2);

        if ((sp as any).__isUp === undefined ||
            (sp as any).__isUp !== priceShiftUp) {
            (sp as any).__isUp = priceShiftUp;
            if (priceShiftUp) {
                sp.style.paddingRight = "5px";
                sp.style.borderRight = this.valuesIncreasedBorder;
                // sp.style.color = this.valuesIncreasedColor;
            } else {
                sp.style.paddingRight = "5px";
                sp.style.borderRight = this.valuesDecreasedBorder;
                // sp.style.color = this.valuesDecreasedColor;
            }
        }
    }

    public onChartStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        args.styleKey = "container";
    }

    public onChartCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        if (args.isCanvasBased) {
            return;
        }
        let templ = args.cellInfo as IgrTemplateCellInfo;

        let content = args.content as HTMLDivElement;
        let icon: HTMLSpanElement;

        if (content.childElementCount > 0) {
            icon = content.children[0] as HTMLSpanElement;
            icon.onclick = (e) => {
                // console.log("chart clicked!!")
                e.stopPropagation();
            }
        } else {
            icon = document.createElement("span");
            content.appendChild(icon);
            icon.style.fontFamily = "Material Icons";
            icon.style.fontSize = "13px";
            icon.style.fontFeatureSettings = "liga";
            icon.style.verticalAlign = "center";
            icon.textContent = "insertchart_outlined";
        }

    }

    public onGridStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        args.styleKey = "grid";
    }

    public onGridCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        if (args.isCanvasBased) {
            return;
        }

        let content = args.content as HTMLDivElement;
        let icon: HTMLSpanElement;

        if (content.childElementCount > 0) {
            icon = content.children[0] as HTMLSpanElement;
            icon.onclick = (e) => {
                // console.log("grid clicked!!")
                e.stopPropagation();
            }
        } else {
            icon = document.createElement("span");
            content.appendChild(icon);
            icon.style.fontFamily = "Material Icons";
            icon.style.fontSize = "13px";
            icon.style.fontFeatureSettings = "liga";
            icon.style.verticalAlign = "center";
            icon.textContent = "tablechart";
        }
    }

    public startTicking = () => {
        if (!this.isTimerTicking) {
            this.isTimerTicking = true;
            window.setTimeout(() => this.onTimerTick(), 16);
        }
    }

    public stopTicking = () => {
        if (this.isTimerTicking) {
            this.isTimerTicking = false;
        }
    }

    public onLiveSomePricesClicked = () => {
        this.isUpdatingAllPrices = false;
        this.isUpdatingSomePrices = !this.isUpdatingSomePrices;
        if (this.isTimerTicking) {
            this.isTimerTicking = false;
            this.setState({
                liveSomePricesText: "Live Prices",
                liveSomePricesDisabled: false,
                liveAllPricesDisabled: false,
            });
        } else {
            this.startTicking();
            this.setState({
                liveSomePricesText: "Stop Prices",
                liveSomePricesDisabled: false,
                liveAllPricesDisabled: true,
            });
        }
    }

    public onLiveAllPricesClicked = () => {
        this.isUpdatingAllPrices = !this.isUpdatingAllPrices;
        this.isUpdatingSomePrices = false;
        if (this.isTimerTicking) {
            this.isTimerTicking = false;
            this.setState({
                liveAllPricesText: "Live All Prices",
                liveAllPricesDisabled: false,
                liveSomePricesDisabled: false,
            });
        } else {
            this.startTicking();
            this.setState({
                liveAllPricesText: "Stop All Prices",
                liveAllPricesDisabled: false,
                liveSomePricesDisabled: true,
            });
        }
    }

    public onChartClicked = () => {
        this.updatePricesByCountry();

        let element = document.getElementById("dialogContainer");
        element.style.visibility = (element.style.visibility == "visible") ? "hidden" : "visible";

        this.setState({
            chartOpen: true
        });
    }

    // onChange?: (event: React.ChangeEvent<{}>, value: number | number[]) => void;
    // public onPriceFrequencyChanged(event: any, value: number) {
    // public onPriceFrequencyChanged(event: any, value: number | number[]) {
    public onPriceFrequencyChanged = (event: CustomEvent<number>) => {
    let value = event.detail;
        this.setState({
            frequency: value,
        });
    }

    public onPriceVolumeChanged = (event: CustomEvent<number>) => {
        let value = event.detail;
        this.setState({
            volume: value,
            data: LiveFinancialData.generateData(value)
        });
        this.grid.dataSource = this.state.data;
    }

    public onGridCanvasModeChanged = (event: any) => {
        this.setState({ canvasChecked: event.checked });
    }

    public onGridHeatModeChanged = (event: any) => {
        this.setState({ heatChecked: event.checked });
    }

    public onGridGroupingChanged = (event: any) => {

        this.setState({ groupingChecked: event.checked });

        if (event.checked) {
            this.onGridGroupingAdd();
        } else {
            this.onGridGroupingRemove();
        }
    }

    public onGridGroupingRemove = () => {
        this.grid.groupDescriptions.clear();
        this.grid.flush();
    }

    public onGridGroupingAdd = () => {
        let g = new IgrColumnGroupDescription();
        g.field = "Category";
        g.sortDirection = ListSortDirection.Descending;
        this.grid.groupDescriptions.add(g);

        g = new IgrColumnGroupDescription();
        g.field = "Type";
        g.sortDirection = ListSortDirection.Descending;
        this.grid.groupDescriptions.add(g);

        g = new IgrColumnGroupDescription();
        g.field = "Contract";
        g.sortDirection = ListSortDirection.Descending;
        this.grid.groupDescriptions.add(g);
    }

    public onPriceDataBound = (sender: any, args: IgrDataBindingEventArgs) => {
            let item: any = args.cellInfo.rowItem;
            if (item === null) { return; }

            if (item.PriceHeat > 0 && this.state.heatChecked)
            {
                let p = +item.PriceHeat;
                let minA = 1.0;
                let maxA = 0.25;

                let maxR = 0.0;
                let minR = 1.0;
                let minG = 1.0;
                let maxG = 1.0;
                let minB = 1.0;
                let maxB = 0.0;

                let a = minA + (maxA - minA) * p;
                let r = minR + (maxR - minR) * p;
                let g = minG + (maxG - minG) * p;
                let b = minB + (maxB - minB) * p;
                r = Math.round(r * 255.0);
                g = Math.round(g * 255.0);
                b = Math.round(b * 255.0);

                let colorString = "rgba(" + r + "," + g + "," + b + "," + a + ")";
                args.cellInfo.background = colorString;
            }
            else if (item.PriceHeat < 0 && this.state.heatChecked) {
                let p = +item.PriceHeat * -1.0;
                let minA = 1.0;
                let maxA = 0.25;

                let minR = 1.0;
                let maxR = 1.0;
                let minG = 1.0;
                let maxG = 0.0;
                let minB = 1.0;
                let maxB = 0.0;

                let a = minA + (maxA - minA) * p;
                let r = minR + (maxR - minR) * p;
                let g = minG + (maxG - minG) * p;
                let b = minB + (maxB - minB) * p;
                r = Math.round(r * 255.0);
                g = Math.round(g * 255.0);
                b = Math.round(b * 255.0);

                let colorString = "rgba(" + r + "," + g + "," + b + "," + a + ")";
                args.cellInfo.background = colorString;
            }
            else
            {
                args.cellInfo.background = "white";
            }
    }

    public onChartClose = () => {

        let element = document.getElementById("dialogContainer");
        element.style.visibility = (element.style.visibility == "visible") ? "hidden" : "visible";

        this.setState({ chartOpen: false });
    }

    public onChartRef = (chart: IgrDataChart) => {
        if (!chart) { return; }

        this.chart = chart;
        // console.log(this.chart);

        if (this.chart) {
            this.updatePricesByCountry();
            // this.chart.animateSeriesWhenAxisRangeChanges = true;
            this.chart.isHorizontalZoomEnabled = true;
            this.chart.isVerticalZoomEnabled = false;
            let xAxis = new IgrCategoryXAxis({ name: "xAxis" });
            xAxis.dataSource = this.state.pricesByCountry;
            xAxis.label = "Country";
            xAxis.labelAngle = 90;
            xAxis.interval = 2;
            let yAxis = new IgrNumericYAxis({ name: "yAxis", abbreviateLargeNumbers: false });

            let columnSeries = new IgrColumnSeries({ name: "columnSeries" });
            columnSeries.transitionDuration = this.state.frequency;
            columnSeries.xAxisName = "xAxis";
            columnSeries.yAxisName = "yAxis";
            columnSeries.xAxis = xAxis;
            columnSeries.yAxis = yAxis;
            columnSeries.showDefaultTooltip = true;
            columnSeries.isHighlightingEnabled = true;
            columnSeries.title = "Price";

            columnSeries.dataSource = this.state.pricesByCountry;
            columnSeries.valueMemberPath = "Price";

            let itemTooltip = new IgrItemToolTipLayer({ name: "tooltips" });

            this.chart.series.add(columnSeries);
            this.chart.axes.add(xAxis);
            this.chart.axes.add(yAxis);
            // this.chart.series.add(itemTooltip);
            yAxis.abbreviateLargeNumbers = true;
        }
    }

    // public transition = (props: any) => {
    //     return <Slide direction="up" {...props} />;
    // }

    public onGridSearchChanged = (event: any) => {

        let term = event.value;

        if (!this.grid) {
            return;
        }

        if (!term || term.length === 0) {
            this.grid.filterExpressions.clear();
        } else {
            let ff = FilterFactory.instance;
            let filter = ff.property("Category").toLower().contains(ff.literal(term).toLower())
                .or(ff.property("Type").toLower().contains(ff.literal(term).toLower()))
                .or(ff.property("Contract").toLower().contains(ff.literal(term).toLower()))
                .or(ff.property("Settlement").toLower().contains(ff.literal(term).toLower()))
                .or(ff.property("Region").toLower().contains(ff.literal(term).toLower()))
                .or(ff.property("Country").toLower().contains(ff.literal(term).toLower()));

            this.grid.filterExpressions.clear();
            this.grid.filterExpressions.add(filter);
        }
    }

    public onGridColumnHidden = (event: any) => {
        let options = event.target.value;
        // console.log(event.target);
        let hidden = [];
        let hiddenSet = new Set<string>();
        for (let i = 0, l = options.length; i < l; i += 1) {
            hidden.push(options[i]);
            hiddenSet.add(options[i]);
        }
        this.setState({
            hiddenColumns: hidden,
        });

        if (!this.grid) {
            return;
        }
        for (let i = 0; i < this.grid.actualColumns.count; i++) {
            let col = this.grid.actualColumns.item(i);
            if (hiddenSet.has(col.name || col.field)) {
                if (!col.isHidden) {
                    col.isHidden = true;
                }
            } else {
                if (col.isHidden) {
                    col.isHidden = false;
                }
            }
        }
    }

}
// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridBindingLiveData/>);
```


## API References

- [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html)
