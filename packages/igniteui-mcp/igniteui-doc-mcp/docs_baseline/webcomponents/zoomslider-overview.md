---
title: Web Components ZoomSlider | Data Visualization Tools | Navigation | Zooming | DataChart | Data Binding | Infragistics
_description: Use Infragistics' Web Components zoom slider control to easily display a subset of data with two handles representing minimum and maximum values. Improve your data visualization with Ignite UI for Web Components zoom slider!
_keywords: zoom slider, Ignite UI for Web Components, Infragistics, data chart
_license: commercial
mentionedTypes: ["ZoomSlider", "XamDataChart"]
_tocName: Zoom Slider
---

# Web Components Zoom Slider Overview

The Web Components ZoomSlider control provides zooming functionality to range-enabled controls. The ZoomSlider features a horizontal scroll bar, a thumbnail of the whole range, and a resizable zoom-range window. The ZoomSlider cannot work as a standalone control and it acts as an enhancement for range-based controls like the DataChart or CategoryChart.

## Web Components Zoom Slider Example

The following sample demonstrates how to use [`IgcZoomSliderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igczoomslidercomponent.html) to navigate content in [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html).

```typescript
export class SampleScatterStats {

    public static countries: Country[];

    public static getCountries(count?: number): any[] {
        if (this.countries === undefined) {
            this.countries = this.initData();
        }
        if (count === undefined) {
            count = 1000;
        }

        const items: Country[] = [];
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (i < count) {
                items.push(country);
            }
        }
        // items = items.sort(this.sortByPopDescending);
        return items;
    }

    public static getCountriesWithHighIncome(): any[] {
        if (this.countries === undefined) {
            this.countries = this.initData();
        }
        const items: any[] = [];
        for (const country of this.countries) {
            if (country.GdpPerCapita >= 10000) {
                items.push(country);
            }
        }
        return items;
    }

    public static getCountriesWithLowIncome(): any[] {
        if (this.countries === undefined) {
            this.countries = this.initData();
        }
        const items: any[] = [];
        for (const country of this.countries) {
            if (country.GdpPerCapita < 10000) {
                items.push(country);
            }
        }
        return items;
    }

    public static getCountriesWithLargePop(): any[] {
        if (this.countries === undefined) {
            this.countries = this.initData();
        }
        const items: any[] = [];
        for (const country of this.countries) {
            if (country.Population >= 10000000) {
                items.push(country);
            }
        }
        return items;
    }

    public static getCountriesWithSmallPop(): any[] {
        if (this.countries === undefined) {
            this.countries = this.initData();
        }
        const items: any[] = [];
        for (const country of this.countries) {
            if (country.Population < 10000000) {
                items.push(country);
            }
        }
        return items;
    }

    public static sortByPopDescending(a: Country, b: Country) {
        if (a.Population > b.Population) { return 1; }
        if (a.Population < b.Population) { return -1; }
        return 0;
    }

    public static sortByPopAscending(a: Country, b: Country) {
        if (a.Population > b.Population) {return -1; }
        if (a.Population < b.Population) {return 1; }
        return 0;
    }

    public static sortByGdpAscending(a: Country, b: Country) {
        if (a.GdpPerCapita > b.GdpPerCapita) {return -1;}
        if (a.GdpPerCapita < b.GdpPerCapita) {return 1;}
        return 0;
    }

    public static sortByGdpDescending(a: Country, b: Country) {
        if (a.GdpPerCapita > b.GdpPerCapita) {return 1;}
        if (a.GdpPerCapita < b.GdpPerCapita) {return -1;}
        return 0;
    }

    public static sortByDepDescending(a: Country, b: Country) {
        if (a.DptPerCapita > b.DptPerCapita) {return 1;}
        if (a.DptPerCapita < b.DptPerCapita) {return -1;}
        return 0;
    }

    public static sortByDptAscending(a: Country, b: Country) {
        if (a.DptPerCapita > b.DptPerCapita) {return -1;}
        if (a.DptPerCapita < b.DptPerCapita) {return 1;}
        return 0;
    }

    public static initData(): Country[] {

        let data: Country[] = [];
        // Code, Population, GDP per Capita, Debt per Capita, Mobile Phones (per 100 people), Name, Region
        data.push(new Country("AFG",29824536,688,92,46,"Afghanistan","Asia"));
        data.push(new Country("ALB",2801681,4406,882,86,"Albania","Europe"));
        data.push(new Country("DZA",38481705,5310,115,88,"Algeria","Africa"));
        data.push(new Country("ADO",78360,40365,15212,84,"Andorra","Europe"));
        data.push(new Country("AGO",20820525,5539,944,48,"Angola","Africa"));
        data.push(new Country("ATG",89069,13406,4388,193,"Antigua and Barbuda","North America"));
        data.push(new Country("ARG",41086927,14680,7759,141,"Argentina","South America"));
        data.push(new Country("ARM",2969081,3354,1584,130,"Armenia","Asia"));
        data.push(new Country("ABW",102384,0,4935,130,"Aruba","South America"));
        data.push(new Country("AUS",22723900,67436,52596,100,"Australia","Oceania"));
        data.push(new Country("AUT",8429991,46792,90128,146,"Austria","Europe"));
        data.push(new Country("AZE",9295784,7394,8513,100,"Azerbaijan","Asia"));
        data.push(new Country("BHS",371960,21908,1067,119,"Bahamas","North America"));
        data.push(new Country("BHR",1317827,23040,13261,125,"Bahrain","Asia"));
        data.push(new Country("BGD",154695368,750,149,45,"Bangladesh","Asia"));
        data.push(new Country("BRB",283221,14917,2456,125,"Barbados","North America"));
        data.push(new Country("BLR",9464000,6722,2629,109,"Belarus","Europe"));
        data.push(new Country("BEL",11128246,43396,113603,111,"Belgium","Europe"));
        data.push(new Country("BLZ",324060,4852,3079,63,"Belize","North America"));
        data.push(new Country("BEN",10050702,751,308,74,"Benin","Asia"));
        data.push(new Country("BMU",64798,84471,2575,136,"Bermuda","North America"));
        data.push(new Country("BTN",741822,2509,1193,55,"Bhutan","Asia"));
        data.push(new Country("BOL",10496285,2576,275,71,"Bolivia","South America"));
        data.push(new Country("BIH",3833916,4396,2052,81,"Bosnia and Herzegovina","Europe"));
        data.push(new Country("BWA",2003910,7255,1208,120,"Botswana","Africa"));
        data.push(new Country("BRA",198656019,11320,1608,101,"Brazil","South America"));
        data.push(new Country("BRN",412238,41127,0,109,"Brunei","Oceania"));
        data.push(new Country("BGR",7305888,7022,6261,138,"Bulgaria","Europe"));
        data.push(new Country("BFA",16460141,652,136,37,"Burkina Faso","Africa"));
        data.push(new Country("BDI",9849569,251,167,18,"Burundi","Africa"));
        data.push(new Country("CPV",494401,3554,714,76,"Cabo Verde","Africa"));
        data.push(new Country("KHM",14864646,945,304,57,"Cambodia","Asia"));
        data.push(new Country("CMR",21699631,1220,164,42,"Cameroon","Africa"));
        data.push(new Country("CAN",34754312,52409,29625,76,"Canada","North America"));
        data.push(new Country("CYM",57570,0,2078,181,"Cayman Islands","North America"));
        data.push(new Country("CAF",4525209,479,270,23,"Central African Republic","Africa"));
        data.push(new Country("TCD",12448175,1035,160,25,"Chad","Africa"));
        data.push(new Country("CHL",17464814,15245,5867,116,"Chile","South America"));
        data.push(new Country("CHN",1350695000,6093,2221,63,"China","Asia"));
        data.push(new Country("COL",47704427,7763,1269,96,"Colombia","South America"));
        data.push(new Country("COM",717503,831,430,24,"Comoros","Africa"));
        data.push(new Country("ZAR",65705093,418,197,19,"Congo Dem. Rep.","Africa"));
        data.push(new Country("COG",4337051,3154,1722,90,"Congo Rep.","Africa"));
        data.push(new Country("CRI",4805295,9443,1874,67,"Costa Rica","North America"));
        data.push(new Country("CIV",19839750,1244,527,82,"Ivory Coast","Africa"));
        data.push(new Country("HRV",4267558,13159,13519,114,"Croatia","Europe"));
        data.push(new Country("CUB",11270957,0,1780,9,"Cuba","North America"));
        data.push(new Country("CUW",152056,0,0,138,"Curacao","North America"));
        data.push(new Country("CYP",1128994,26352,37812,94,"Cyprus","Europe"));
        data.push(new Country("CZE",10510785,18690,8260,123,"Czechia","Europe"));
        data.push(new Country("DNK",5591572,56364,101084,116,"Denmark","Europe"));
        data.push(new Country("DJI",859652,1575,573,20,"Djibouti","Africa"));
        data.push(new Country("DMA",71684,6913,3000,148,"Dominica","North America"));
        data.push(new Country("DOM",10276621,5733,1162,89,"Dominican Republic","North America"));
        data.push(new Country("ECU",15492264,5425,995,99,"Ecuador","South America"));
        data.push(new Country("EGY",80721874,3256,391,91,"Egypt","Africa"));
        data.push(new Country("SLV",6297394,3782,1953,124,"El Salvador","North America"));
        data.push(new Country("GNQ",736296,22391,634,57,"Equatorial Guinea","Africa"));
        data.push(new Country("ERI",6130922,504,195,3,"Eritrea","Africa"));
        data.push(new Country("EST",1325016,16887,16944,127,"Estonia","Europe"));
        data.push(new Country("ETH",91728849,467,51,8,"Ethiopia","Africa"));
        data.push(new Country("EUU",505640311,32917,0,118,"European Union","Europe"));
        data.push(new Country("FRO",49506,0,0,120,"Faeroe Islands","Europe"));
        data.push(new Country("FJI",874742,4613,150,81,"Fiji","Oceania"));
        data.push(new Country("FIN",5413971,45649,68960,156,"Finland","Europe"));
        data.push(new Country("FRA",65676758,39759,74619,91,"France","Europe"));
        data.push(new Country("GAB",1632572,10930,1587,103,"Gabon","Africa"));
        data.push(new Country("GMB",1791225,510,306,88,"Gambia","Africa"));
        data.push(new Country("GEO",4490700,3529,1940,91,"Georgia","Asia"));
        data.push(new Country("DEU",80425823,42598,57755,106,"Germany","Europe"));
        data.push(new Country("GHA",25366462,1646,274,72,"Ghana","Africa"));
        data.push(new Country("GRC",11092771,22395,47636,111,"Greece","Europe"));
        data.push(new Country("GRL",56810,0,1035,101,"Greenland","Europe"));
        data.push(new Country("GRD",105483,7598,3402,116,"Grenada","North America"));
        data.push(new Country("GTM",15082831,3341,1216,126,"Guatemala","North America"));
        data.push(new Country("GIN",11451273,493,305,37,"Guinea","Asia"));
        data.push(new Country("GNB",1663558,494,722,43,"Guinea-Bissau","Asia"));
        data.push(new Country("GUY",795369,3585,1049,71,"Guyana","South America"));
        data.push(new Country("HTI",10173775,776,36,40,"Haiti","North America"));
        data.push(new Country("HND",7935846,2339,465,125,"Honduras","North America"));
        data.push(new Country("HKG",7154600,36708,105420,196,"Hong Kong","Asia"));
        data.push(new Country("HUN",9920362,12560,14821,120,"Hungary","Europe"));
        data.push(new Country("ISL",320716,42362,362942,107,"Iceland","Europe"));
        data.push(new Country("IND",1236686732,1503,240,62,"India","Asia"));
        data.push(new Country("IDN",246864191,3551,837,88,"Indonesia","Asia"));
        data.push(new Country("IRN",76424443,6578,170,73,"Iran","Asia"));
        data.push(new Country("IRQ",32578209,6625,1641,75,"Iraq","Asia"));
        data.push(new Country("IRL",4586897,45922,512083,105,"Ireland","Europe"));
        data.push(new Country("ISR",7910500,32567,12070,123,"Israel","Asia"));
        data.push(new Country("ITA",59539717,33814,36841,155,"Italy","Europe"));
        data.push(new Country("JAM",2707805,5464,4660,116,"Jamaica","North America"));
        data.push(new Country("JPN",127561489,46548,24000,97,"Japan","Asia"));
        data.push(new Country("JOR",6318000,4909,903,103,"Jordan","Asia"));
        data.push(new Country("KAZ",16791425,12120,6060,122,"Kazakhstan","Asia"));
        data.push(new Country("KEN",43178141,933,200,61,"Kenya","Africa"));
        data.push(new Country("KIR",100786,1736,120,11,"Kiribati","Oceania"));
        data.push(new Country("PRK",24763188,0,544,2,"Korea North","Asia"));
        data.push(new Country("KOR",50004441,24454,7567,105,"Korea South","Asia"));
        data.push(new Country("KSV",1807106,3567,0,0,"Kosovo","Europe"));
        data.push(new Country("KWT",3250496,56367,15754,133,"Kuwait","Asia"));
        data.push(new Country("KGZ",5607200,1178,699,99,"Kyrgyzstan","Asia"));
        data.push(new Country("LAO",6645827,1412,900,63,"Laos","Asia"));
        data.push(new Country("LVA",2034319,13947,18527,110,"Latvia","Europe"));
        data.push(new Country("LBN",4424888,9764,8815,66,"Lebanon","Asia"));
        data.push(new Country("LSO",2051545,1135,255,49,"Lesotho","Africa"));
        data.push(new Country("LBR",4190435,414,65,40,"Liberia","Africa"));
        data.push(new Country("LBY",6154623,13303,972,180,"Libya","Africa"));
        data.push(new Country("LIE",36656,0,0,98,"Liechtenstein","Europe"));
        data.push(new Country("LTU",2987773,14172,9995,159,"Lithuania","Europe"));
        data.push(new Country("LUX",530946,103859,3696467,143,"Luxembourg","Europe"));
        data.push(new Country("MAC",556783,77196,0,210,"Macao","Asia"));
        data.push(new Country("MKD",2105575,4548,2668,102,"Macedonia","Europe"));
        data.push(new Country("MDG",22293914,443,140,37,"Madagascar","Africa"));
        data.push(new Country("MWI",15906483,267,77,21,"Malawi","Africa"));
        data.push(new Country("MYS",29239927,10432,2570,120,"Malaysia","Asia"));
        data.push(new Country("MDV",338442,6244,2947,152,"Maldives","Oceania"));
        data.push(new Country("MLI",14853572,696,254,53,"Mali","Africa"));
        data.push(new Country("MLT",419455,20839,14233,107,"Malta","Europe"));
        data.push(new Country("MHL",52555,3292,1377,0,"Marshall Islands","Oceania"));
        data.push(new Country("MRT",3796141,1043,831,77,"Mauritania","Africa"));
        data.push(new Country("MUS",1291167,8862,3937,97,"Mauritius","Africa"));
        data.push(new Country("MEX",120847477,9818,1956,78,"Mexico","North America"));
        data.push(new Country("FSM",103395,3155,556,27,"Micronesia","Oceania"));
        data.push(new Country("MDA",3559519,2047,1296,71,"Moldova","Europe"));
        data.push(new Country("MCO",37579,0,471428,64,"Monaco","Europe"));
        data.push(new Country("MNG",2796484,3691,686,93,"Mongolia","Asia"));
        data.push(new Country("MNE",621081,6514,939,189,"Montenegro","Europe"));
        data.push(new Country("MAR",32521143,2902,712,101,"Morocco","Africa"));
        data.push(new Country("MOZ",25203395,570,231,30,"Mozambique","Africa"));
        data.push(new Country("MMR",52797319,0,117,1,"Myanmar","Asia"));
        data.push(new Country("NAM",2259393,5931,1131,90,"Namibia","Africa"));
        data.push(new Country("NPL",27474377,699,161,34,"Nepal","Asia"));
        data.push(new Country("NLD",16754962,45961,226503,115,"Netherlands","Europe"));
        data.push(new Country("NCL",258000,0,385,90,"New Caledonia","Oceania"));
        data.push(new Country("NZL",4433000,38680,52300,108,"New Zealand","Oceania"));
        data.push(new Country("NIC",5991733,1777,693,68,"Nicaragua","North America"));
        data.push(new Country("NER",17157042,395,178,23,"Niger","Africa"));
        data.push(new Country("NGA",168833776,2722,71,55,"Nigeria","Africa"));
        data.push(new Country("NAC",348692795,51826,0,90,"North America","North America"));
        data.push(new Country("NOR",5018573,99636,131220,114,"Norway","Europe"));
        data.push(new Country("OMN",3314001,23624,2962,164,"Oman","Asia"));
        data.push(new Country("PAK",179160111,1255,366,57,"Pakistan","Asia"));
        data.push(new Country("PLW",20754,11202,0,71,"Palau","Oceania"));
        data.push(new Country("PAN",3802281,9982,3927,181,"Panama","North America"));
        data.push(new Country("PNG",7167010,2184,238,28,"Papua New Guinea","Oceania"));
        data.push(new Country("PRY",6687361,3680,382,92,"Paraguay","South America"));
        data.push(new Country("PER",29987800,6424,1126,100,"Peru","South America"));
        data.push(new Country("PHL",96706764,2587,636,89,"Philippines","Asia"));
        data.push(new Country("POL",38535873,12721,6586,123,"Poland","Europe"));
        data.push(new Country("PRT",10514844,20175,47835,115,"Portugal","Europe"));
        data.push(new Country("PRI",3651545,27795,15692,79,"Puerto Rico","North America"));
        data.push(new Country("QAT",2050514,92633,41988,125,"Qatar","Asia"));
        data.push(new Country("ROM",20076727,8437,5082,111,"Romania","Europe"));
        data.push(new Country("RUS",143178000,14091,3634,166,"Russian","Asia"));
        data.push(new Country("RWA",11457801,623,284,33,"Rwanda","Africa"));
        data.push(new Country("WSM",188889,3623,968,0,"Samoa","Oceania"));
        data.push(new Country("SMR",31247,0,8388,99,"San Marino","Europe"));
        data.push(new Country("STP",188098,1400,2193,58,"Sao Tome and Principe","Oceania"));
        data.push(new Country("SAU",28287855,25946,3176,189,"Saudi Arabia","Asia"));
        data.push(new Country("SEN",13726021,1023,296,64,"Senegal","Africa"));
        data.push(new Country("SRB",7199077,5294,4178,125,"Serbia","Europe"));
        data.push(new Country("SYC",88303,11689,15614,129,"Seychelles","Africa"));
        data.push(new Country("SLE",5978727,633,340,35,"Sierra Leone","Africa"));
        data.push(new Country("SGP",5312400,54007,0,145,"Singapore","Asia"));
        data.push(new Country("SVK",5407579,16893,10926,109,"Slovakia","Europe"));
        data.push(new Country("SVN",2057159,22059,25555,103,"Slovenia","Europe"));
        data.push(new Country("SLB",549598,1819,355,22,"Solomon Islands","Oceania"));
        data.push(new Country("SOM",10195134,0,386,7,"Somalia","Africa"));
        data.push(new Country("ZAF",52274945,7314,1613,98,"South Africa","Africa"));
        data.push(new Country("SAS",1649249388,1396,0,60,"South Asia","South Asia"));
        data.push(new Country("SSD",10837527,974,0,0,"South Sudan","Africa"));
        data.push(new Country("ESP",46761264,28282,52045,111,"Spain","Europe"));
        data.push(new Country("LKA",20328000,2922,881,84,"Sri Lanka","Asia"));
        data.push(new Country("KNA",53584,13658,6408,153,"St. Kitts and Nevis","North America"));
        data.push(new Country("LCA",180870,7288,1586,112,"St. Lucia","North America"));
        data.push(new Country("VCT",109373,6349,4477,121,"St. Vincent and the Grenadines","North America"));
        data.push(new Country("SXM",30959,0,0,0,"Sint Maarten","North America"));
        data.push(new Country("SDN",37195349,1695,946,42,"Sudan","Africa"));
        data.push(new Country("SUR",534541,9376,1011,99,"Suriname","South America"));
        data.push(new Country("SWZ",1230985,3290,428,61,"Swaziland","Africa"));
        data.push(new Country("SWE",9519374,55039,91487,117,"Sweden","Europe"));
        data.push(new Country("CHE",7996861,78929,154063,123,"Switzerland","Europe"));
        data.push(new Country("SYR",22399254,0,373,54,"Syria","Asia"));
        data.push(new Country("TJK",8008990,953,262,78,"Tajikistan","Asia"));
        data.push(new Country("TZA",47783107,609,183,47,"Tanzania","Africa"));
        data.push(new Country("THA",66785001,5480,1292,108,"Thailand","Asia"));
        data.push(new Country("TMP",1148958,1179,0,44,"East Timor","Oceania"));
        data.push(new Country("TGO",6642928,589,0,41,"Togo","Africa"));
        data.push(new Country("TON",104941,4494,799,52,"Tonga","Africa"));
        data.push(new Country("TTO",1337439,17523,3502,143,"Trinidad and Tobago","North America"));
        data.push(new Country("TUN",10777500,4197,1779,105,"Tunisia","Africa"));
        data.push(new Country("TUR",73997128,10661,3794,86,"Turkey","Asia"));
        data.push(new Country("TKM",5172931,6798,978,63,"Turkmenistan","Asia"));
        data.push(new Country("TUV",9860,4044,0,16,"Tuvalu","Oceania"));
        data.push(new Country("UGA",36345860,551,85,38,"Uganda","Africa"));
        data.push(new Country("UKR",45593300,3873,2144,117,"Ukraine","Europe"));
        data.push(new Country("ARE",9205651,41692,24273,129,"United Arab Emirates","Asia"));
        data.push(new Country("GBR",63695687,38649,160158,124,"United Kingdom","Europe"));
        data.push(new Country("USA",313873685,51755,52170,91,"United States","North America"));
        data.push(new Country("URY",3395253,14728,3989,132,"Uruguay","South America"));
        data.push(new Country("UZB",29774500,1719,150,76,"Uzbekistan","Asia"));
        data.push(new Country("VUT",247262,3183,389,72,"Vanuatu","Oceania"));
        data.push(new Country("VEN",29954782,12729,1906,96,"Venezuela","South America"));
        data.push(new Country("VNM",88772900,1755,379,125,"Vietnam","Asia"));
        data.push(new Country("WBG",4046901,2530,414,65,"Palestine","Asia"));
        data.push(new Country("YEM",23852409,1341,293,49,"Yemen Rep.","Asia"));
        data.push(new Country("ZMB",14075099,1463,264,41,"Zambia","Africa"));
        data.push(new Country("ZWE",13724317,909,609,59,"Zimbabwe","Africa"));

        // data = data.sort(this.sortByPopAscending);
        data = data.sort(this.sortByPopDescending);

        const countries: Country[] = [];
        for (const country of data) {
            if (country.isValid()) {
                countries.push(country);
            }
        }
        return countries;
    }

    public static abbreviate(value: number): string {
        const suffixes = ["", "K", "M", "B", "T"];
        const roundValue = Math.round(value);
        const suffixNum = Math.floor(("" + roundValue).length / 3);
        const shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toFixed(1));

        return shortValue + suffixes[suffixNum];
    }
}

class Country {
    public Population: number;
    public GdpPerCapita: number;
    public GdpTotal: number;
    public DptPerCapita: number;
    public PhonePer100: number;

    public Code: string;
    public Name: string;
    public Region: string;

    constructor(code: string,
        pop: number, gdp: number, dpt: number, phones: number,
        name: string, region: string) {
        this.Code = code;
        this.Region = region;
        this.Name = name;

        this.Population = pop;
        this.GdpPerCapita = gdp;
        this.GdpTotal = gdp * pop; // / 1000000;
        this.DptPerCapita = dpt;
        this.PhonePer100 = phones;
    }

    public isValid(): boolean {
        return this.GdpPerCapita > 0 && this.Population > 0  &&
               this.DptPerCapita > 0 && this.PhonePer100 > 0
    }

    public getPopulation(): string {
        return SampleScatterStats.abbreviate(this.Population);
    }
    public getGdpTotal(): string {
        return SampleScatterStats.abbreviate(this.GdpTotal);
    }
    public getGdpPerCapita(): string {
        return SampleScatterStats.abbreviate(this.GdpPerCapita);
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Usage

| Feature Name        | Description |
| --------------------|----------------------- |
| Scrollbar navigation       | Users can change scale and scroll through ranges of data using the built-in capabilities of the ZoomSlider scrollbar. |
| Panning and zooming       | Users can adjust the display scale by dragging the edges of the thumb pad to either make the current display cover a larger range (zoom out) or a smaller range (zoom in). |
| Multiple user interaction options       | All mouse user interactions are redundantly supported through touch and most of them – through the keyboard. For details, see User Interactions and Usability. |
| Touch support       |  On touch-enabled devices, users can enjoy the full ZoomSlider functionality. All mouse interactions are supported in touch environment. |
| Extensibility       | The ZoomSlider control supports DataChart control out-of the box. |
| Configurable zoom-range window       | The initial zoom-range window width and position, as well as its minimum size, are configurable. |

## Dependencies

When installing the Web Components chart component, the core package must also be installed.

```cmd
npm install --save igniteui-webcomponents-core
npm install --save igniteui-webcomponents-charts
```

## Component Modules

The [`IgcZoomSliderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igczoomslidercomponent.html) requires the following modules:

```ts
import { IgcZoomSliderModule } from 'igniteui-webcomponents-charts';
import { IgcZoomSliderComponent } from "igniteui-webcomponents-charts";

IgcZoomSliderModule.register();
```

## Code Snippet

The following code demonstrates how to setup the ZoomSlider.

```html
  <igc-zoom-slider
      name="zoomSlider"
      width="100%"
      height="160px" >
  </igc-zoom-slider>
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about charts in [Chart Features](charts/chart-features.md) topic.

## API References

The following is a list of API members mentioned in the above sections:

- [`IgcZoomSliderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igczoomslidercomponent.html)
- [`IgcDataChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcdatachartcomponent.html)
