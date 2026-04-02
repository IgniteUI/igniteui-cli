---
title: Web Components Data Grid | Real-Time Data Grid and Tables | Localization | Infragistics
_description: Use Infragistics' Ignite UI for Web Components Data Table & Grid which supports localization. View Ignite UI for Web Components table tutorials!
_keywords: Web Components Table, Data Grid, cell accessibility, Ignite UI for Web Components, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Localization
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Web Components Grid Localization

The Ignite UI for Web Components Data Table / Data Grid supports localizing the resource strings specific to the column options pop-up and summaries. Note, this is not intended to be used nor capable of translating the data.

## Web Components Grid Localization Example

```typescript
export class DataGridLocalizationJa {
    [key: string]: string;
    "Apply": string = "適用";
    "Cancel": string = "キャンセル";
    "Clear_Column_Filter": string = "列フィルターをクリア";
    "Column_Move": string = "移動";
    "Column_Move_Left": string = "左";
    "Column_Move_Right": string = "右";
    "Column_Pin": string = "ピン固定";
    "Column_Pin_Left": string = "左";
    "Column_Pin_Right": string = "右";
    "Column_Sort": string = "ソート";
    "Column_Sort_Ascending": string = "昇順";
    "Column_Sort_Descending": string = "降順";
    "Filter_Columns_List": string = "列リストのフィルター";
    "Search": string = "検索";
    "Select_All": string = "すべて選択";
    "ComparisonOperator_Bottom": string = "下";
    "ComparisonOperator_BottomPercentile": string = "下位の百分位数";
    "ComparisonOperator_Contains": string = "～を含む";
    "ComparisonOperator_DoesNotContain": string = "～を含まない";
    "ComparisonOperator_DoesNotEndWith": string = "～で終わらない";
    "ComparisonOperator_DoesNotMatch": string = "～と一致しない";
    "ComparisonOperator_DoesNotStartWith": string = "～で始まらない";
    "ComparisonOperator_Empty": string = "空";
    "ComparisonOperator_EndsWith": string = "次の値で終わる";
    "ComparisonOperator_Equals": string = "等しい";
    "ComparisonOperator_False": string = "False";
    "ComparisonOperator_GreaterThan": string = "次の値より大きい";
    "ComparisonOperator_GreaterThanOrEqualTo": string = "次の値より大きいまたは等しい";
    "ComparisonOperator_LastMonth": string = "先月";
    "ComparisonOperator_LastQuater": string = "前四半期";
    "ComparisonOperator_LastWeek": string = "先週";
    "ComparisonOperator_LastYear": string = "昨年";
    "ComparisonOperator_LessThan": string = "次の値より小さい";
    "ComparisonOperator_LessThanOrEqualTo": string = "次の値より小さいまたは等しい";
    "ComparisonOperator_NextMonth": string = "翌月";
    "ComparisonOperator_NextQuater": string = "翌四半期";
    "ComparisonOperator_NextWeek": string = "来週";
    "ComparisonOperator_NextYear": string = "翌年";
    "ComparisonOperator_NotEmpty": string = "空ではない";
    "ComparisonOperator_NotEquals": string = "次の値に等しくない";
    "ComparisonOperator_StartsWith": string = "～で始まる";
    "ComparisonOperator_ThisMonth": string = "今月";
    "ComparisonOperator_ThisQuarter": string = "本四半期";
    "ComparisonOperator_ThisWeek": string = "今週";
    "ComparisonOperator_ThisYear": string = "今年";
    "ComparisonOperator_Today": string = "今日";
    "ComparisonOperator_Tomorrow": string = "明日";
    "ComparisonOperator_Top": string = "上";
    "ComparisonOperator_TopPercentile": string = "上位の百分位数";
    "ComparisonOperator_True": string = "True";
    "ComparisonOperator_Yesterday": string = "昨日";
    "Column_Options_Summary_Average": string = "平均";
    "Column_Options_Summary_Count": string = "カウント";
    "Column_Options_Summary_Maximum": string = "最大値";
    "Column_Options_Summary_Minimum": string = "最小値";
    "Column_Options_Summary_Sum": string = "合計値";
    "Column_Options_Summaries": string = "集計";
}

export class DataGridSummariesLocalizationJa {
    [key: string]: string;
    "DataSource_Summary_Avg": string = "平均"; 
    "DataSource_Summary_Count": string = "カウント"; 
    "DataSource_Summary_Max": string = "最大値"; 
    "DataSource_Summary_Min": string = "最小値"; 
    "DataSource_Summary_Sum": string = "合計値";
}

export class DataGridDateTimeColumnLocalizationJa {
    [key: string]: string;
    "April_Full" = "4月";
	"April_Short" = "4月";
	"August_Full" = "August";
	"August_Short" = "8月";
	"December_Full" = "December";
	"December_Short" = "12月";
	"February_Full" = "February";
	"February_Short" = "2月";
	"Friday_Full" = "Friday";
	"Friday_Short" = "Fri";
	"Friday_Single" = "金";
	"January_Full" = "January";
	"January_Short" = "1月";
	"July_Full" = "July";
	"July_Short" = "7月";
	"June_Full" = "June";
	"June_Short" = "6月";
	"March_Full" = "March";
	"March_Short" = "3月";
	"May_Full" = "May";
	"May_Short" = "5月";
	"Monday_Full" = "Monday";
	"Monday_Short" = "Mon";
	"Monday_Single" = "月";
	"November_Full" = "November";
	"November_Short" = "11月";
	"October_Full" = "October";
	"October_Short" = "10月";
	"Saturday_Full" = "Saturday";
	"Saturday_Short" = "Sat";
	"Saturday_Single" = "土";
	"September_Full" = "September";
	"September_Short" = "9月";
	"Sunday_Full" = "Sunday";
	"Sunday_Short" = "Sun";
	"Sunday_Single" = "日";
	"Thursday_Full" = "Thursday";
	"Thursday_Short" = "Thu";
	"Thursday_Single" = "木";
	"Today" = "Today";
	"Tuesday_Full" = "Tuesday";
	"Tuesday_Short" = "Tue";
	"Tuesday_Single" = "火";
	"Wednesday_Full" = "Wednesday";
	"Wednesday_Short" = "Wed";
	"Wednesday_Single" = "水";
}

export class DataGridMultiColumnComboBoxLocalizationJa {
    [key: string]: string;
    "NoMatches" = "一致なし";
}
```
```typescript
export class DataGridSharedData {

    public static getEmployees(count?: number): any[] {
        if (count === undefined) {
            count = 250;
        }

        const employees: any[] = [];
        let maleCount: number = 10;
        let femaleCount: number = 10;
        for (let i = 0; i < count; i++) {
            const age: number = Math.round(this.getRandomNumber(20, 40));
            const gender: string = this.getRandomGender();
            const firstName: string = this.getRandomNameFirst(gender);
            const lastName: string = this.getRandomNameLast();
            const street: string = this.getRandomStreet();
            const country: string = this.getRandomItem(this.countries);
            const city: string = this.getRandomCity(country);
            const generation = Math.floor(age / 10) * 10 + "s";
            const email: string = firstName.toLowerCase() + "@" + this.getRandomItem(this.emails);
            const website: string = firstName.toLowerCase() + "-" + this.getRandomItem(this.websites);
            let photoPath: any;

            if (gender === "男") {
                maleCount++;
                if (maleCount > 39) {
                    maleCount = 10;
                }
                photoPath = this.getPhotoMale(maleCount);
            }
            else {
                femaleCount++;
                if (femaleCount > 39) {
                    femaleCount = 10;
                }
                photoPath = this.getPhotoFemale(femaleCount);
            }

            let person: any = {};
            person.Address = street + "," + city;
            person.Age = age;
            person.Birthday = this.getBirthday(age);
            person.City = city;
            person.Country = country;
            person.CountryFlag = this.getCountryFlag(country);
            person.Email = email;
            person.FirstName = firstName;
            person.Gender = this.getGenderPhoto(gender);
            person.Generation = generation;
            person.ID = this.pad(i + 1, 5);
            person.LastName = lastName;
            person.Name = firstName + " " + lastName;
            person.Phone = this.getRandomPhone();
            person.Photo = photoPath;
            person.Street = street;
            person.Salary = this.getRandomNumber(40, 200) * 1000;
            person.Sales = this.getRandomNumber(200, 980) * 1000;
            person.Website = website;
            person.Productivity = this.getProductivity();

            if (person.Salary < 50000) {
                person.Income = "低い";
            } else if (person.Salary < 100000) {
                person.Income = "平均";
            } else {
                person.Income = "高い";
            }

            employees.push(person);
        }
        return employees;
    }

    public static getProductivity(weekCount?: number): any[] {
        if (weekCount === undefined) {
            weekCount = 52;
        }
        const productivity: any[] = [];
        for (let w = 0; w < weekCount; w++) {
            const value = this.getRandomNumber(-50, 50);
            productivity.push({Value: value, Week: w});
        }
        return productivity;
    }

    public static getSales(count?: number): any[] {
        if (count === undefined) {
            count = 250;
        }

        const names: string[] = [
            "Intel CPU", "AMD CPU",
            "Intel Motherboard", "AMD Motherboard", "NVIDIA Motherboard",
            "NVIDIA GPU", "GIGABYTE GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" ];
        const countries: string[] = ["アメリカ合衆国", "イギリス", "フランス", "カナダ", "ポーランド", "日本", "ドイツ"];
        const status: string[] = ["梱包中", "出荷完了", "配達完了"];
        const sales: any[] = [];

        for (let i = 0; i < count; i++) {
            const price = this.getRandomNumber(100, 900);
            const items = this.getRandomNumber(10, 80);
            const value = price * items;
            const margin = this.getRandomNumber(3, 10);
            const profit = Math.round((price * margin / 100) * items);
            const country = this.getRandomItem(countries);
            sales.push({
                BundlePrice: price,
                ProductPrice: price,
                Margin: margin,
                OrderDate: this.getRandomDate(new Date(2012, 0, 1), new Date()),
                OrderItems: items,
                OrderValue: value, //  Math.round(value / 1000) + "," + Math.round(value % 1000),
                ProductID: 1001 + i,
                ProductName: this.getRandomItem(names),
                Profit: profit,
                Countries: country,
                CountryFlag: this.getCountryFlag(country),
                Status: this.getRandomItem(status)
            });
        }
        return sales;
    }

    public static getHouses(count?: number): any[] {
        if (count === undefined) {
            count = 250;
        }

        const houses: any[] = [];
        const property: string[] = [ "タウンハウス", "戸建て", "マンション", "別荘"];
        const emails: string[] = [ "estates.com", "remax.com", "zillow.com", "realtor.com", "coldwell.com"];
        const countries: string[] = ["アメリカ合衆国", "イギリス", "フランス", "カナダ", "ポーランド", "日本", "ドイツ"];


        for (let i = 0; i < count; i++) {
            const year: number = this.getRandomNumber(1950, 2015);
            const age: number = 2020 - year;

            const gender: string = this.getRandomGender();
            const firstName: string = this.getRandomNameFirst(gender);
            const lastName: string = this.getRandomNameLast();
            const initials = firstName.substr(0, 1).toLowerCase();
            const email: string = initials + lastName.toLowerCase() + "@" + this.getRandomItem(emails);

            const street: string = this.getRandomStreet();
            const country: string = this.getRandomItem(countries);
            const city: string = this.getRandomCity(country);

            houses.push({
                Address: street + "," + city,
                Age: age,
                Agent: firstName + " " + lastName,
                Area: this.getRandomNumber(50, 300),
                Baths: this.getRandomNumber(1, 3),
                Built: year,
                City: city,
                Country: country,
                CountryFlag: this.getCountryFlag(country),
                Email: email,
                ID: this.pad(i + 1, 5),
                Phone: this.getRandomPhone(),
                Price: this.getRandomNumber(210, 900) * 1000,
                Property: this.getRandomItem(property),
                Rooms: this.getRandomNumber(2, 5),
                SaleDate: this.getRandomDate(new Date(2015, 0, 1), new Date()),
                Street: street,
            });
        }
        return houses;
    }

    private static websites: string[] = [ ".com", ".gov", ".edu", ".org"];
    private static emails: string[] = [ "gmail.com", "yahoo.com", "twitter.com"];
    private static genders: string[] = ["男", "女"];
    private static maleNames: string[] = ["カイル", "オスカー", "ラルフ", "マイク", "ビル", "フランク", "ハワード", "ジャック", "ラリー", "ピート", "スティーブ", "ヴィンス", "マーク", "アレックス", "マックス", "ブライアン", "クリス", "アンドリュー", "マーティン", "マイク", "スティーブ", "グレン", "ブルース"];
    private static femaleNames: string[] = ["ジーナ", "アイリーン", "ケイティ", "ブレンダ", "ケーシー", "フィオナ", "ホリー", "ケイト", "リズ", "パメラ", "ネリー", "マリサ", "モニカ", "アンナ", "ジェシカ", "ソフィア", "イザベラ", "マーゴ", "ジェーン", "オードリー", "サリー", "メラニー", "グレタ", "オーロラ", "サリー"];
    private static lastNames: string[] = ["アダムス", "クローリー", "エリス", "マルチネス", "アーバイン", "マクスウェル", "クラーク", "オーエンス", "ルーニー", "リンカーン", "トーマス", "スペーシー", "モーガン", "キング", "ニュートン", "フィッツジェラルド", "ホームズ", "ジェファーソン", "ランドリー", "ベリー", "ペレス", "スペンサー", "スター", "カーター", "エドワーズ", "スターク", "ジョンソン", "フィッツ", "チーフ", "ブランク", "ペリー", "ストーン", "ウィリアムズ", "レーン", "ジョブズ", "アダムス", "パワー", "テスラ"];
    private static countries: string[] = ["アメリカ合衆国", "イギリス", "フランス", "カナダ", "ポーランド"];
    private static citiesUS: string[] = ["ニューヨーク", "ロサンゼルス", "マイアミ", "サンフランシスコ", "サンディエゴ", "ラスベガス"];
    private static citiesUK: string[] = ["ロンドン", "リバプール", "マンチェスター"];
    private static citiesFR: string[] = ["パリ", "マルセイユ", "リヨン"];
    private static citiesCA: string[] = ["トロント", "バンクーバー", "モントリオール"];
    private static citiesPL: string[] = ["クラクフ", "ワルシャワ", "ヴロツワフ", "グダニスク"];
    private static citiesJP: string[] = ["東京", "大阪", "京都", "横浜"];
    private static citiesGR: string[] = ["ベルリン", "ボン", "ケルン", "ミュンヘン", "ハンブルク"];
    private static roadSuffixes: string[] = ["通り", "筋", "小路"];
    private static roadNames: string[] = ["メイン", "ガーデン", "ブロード", "オーク", "シダー", "パーク", "パイン", "エルム", "マーケット", "ヒル"];

    private static getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    private static getRandomItem(array: any[]): any {
        const index = Math.round(this.getRandomNumber(0, array.length - 1));
        return array[index];
    }

    private static getRandomDate(start: Date, end: Date): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    private static getRandomPhone(): string {
        const phoneCode = this.getRandomNumber(100, 900);
        const phoneNum1 = this.getRandomNumber(100, 900);
        const phoneNum2 = this.getRandomNumber(1000, 9000);
        const phone = phoneCode + "-" + phoneNum1 + "-" + phoneNum2;
        return phone;
    }

    private static getRandomGender(): string {
        return this.getRandomItem(this.genders);
    }

    private static getRandomNameLast(): string {
        return this.getRandomItem(this.lastNames);
    }

    private static getRandomNameFirst(gender: string): string {
        if (gender === "男") {
            return this.getRandomItem(this.maleNames);
        }
        else {
            return this.getRandomItem(this.femaleNames);
        }
    }

    private static getRandomCity(country: string): string {
        if (country === "カナダ") {
            return this.getRandomItem(this.citiesCA);
        } else if (country === "フランス") {
            return this.getRandomItem(this.citiesFR);
        } else if (country === "ポーランド") {
            return this.getRandomItem(this.citiesPL);
        } else if (country === "アメリカ合衆国") {
            return this.getRandomItem(this.citiesUS);
        } else if (country === "日本") {
            return this.getRandomItem(this.citiesJP);
        } else if (country === "ドイツ") {
            return this.getRandomItem(this.citiesGR);
        } else {
            return this.getRandomItem(this.citiesUK);
        }
    }

    private static getRandomStreet(): string {
        const num = Math.round(this.getRandomNumber(100, 300)).toString();
        const road = this.getRandomItem(this.roadNames);
        const suffix = this.getRandomItem(this.roadSuffixes);
        return num + " " + road + " " + suffix;
    }

    private static getBirthday(age: number): Date {
        const today: Date = new Date();
        const year: number = today.getFullYear() - age;
        const month: number = this.getRandomNumber(0, 8);
        const day: number = this.getRandomNumber(10, 27);
        return new Date(year, month, day);
    }

    private static getPhotoMale(id: number): string {
        return 'https://dl.infragistics.com/x/img/people/men/' + this.pad(id, 2) + '.png';
    }

    private static getPhotoFemale(id: number): string {
        return 'https://dl.infragistics.com/x/img/people/women/' + this.pad(id, 2) + '.png';
    }

    private static getGenderPhoto(gender: string): string {
        // Note: Mapping between En and Ja.
        // This comment is for the sake of coding and debugging.
        // private static genders: string[] = ["male", "female"];
        // private static genders: string[] = ["男", "女"];

        const genderEn = (gender == "男" ? "male" : "female");
        return 'https://dl.infragistics.com/x/img/genders/' + genderEn + '.png';
    }

    private static getCountryFlag(country: string): string {
        // Note: Mapping between En and Ja.
        // This comment is for the sake of coding and debugging.
        // const countries: string[] = ["United-States", "United-Kingdom", "France", "Canada", "Poland", "Japan", "Germany"];
        // const countries: string[] = ["アメリカ合衆国", "イギリス", "フランス", "カナダ", "ポーランド", "日本", "ドイツ"];

        let countryEn = "";
        if (country == "カナダ")
        {
            countryEn = "Canada";
        }
        else if (country == "フランス")
        {
            countryEn = "France";
        }
        else if (country == "ポーランド")
        {
            countryEn = "Poland";
        }
        else if (country == "アメリカ合衆国")
        {
            countryEn = "United-States";
        }
        else if (country == "日本")
        {
            countryEn = "Japan";
        }
        else if (country == "ドイツ")
        {
            countryEn = "Germany";
        }
        else
        { // if (country === "United-Kingdom") {
            countryEn = "United-Kingdom";
        }

        return 'https://dl.infragistics.com/x/img/flags/' + countryEn + '.png';
    }

    private static pad(num: number, size: number): string{
        let s = num + "";
        while (s.length < size) {
            s = "0" + s;
        }
        return s;
    }

}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Resource Strings

This is the full list of strings to localize the grid.

### Column Option Strings

- Apply
- Cancel
- Clear_Column_Filter
- Column_Move
- Column_Move_Left
- Column_Move_Right
- Column_Pin
- Column_Pin_Left
- Column_Pin_Right
- Column_Sort
- Column_Sort_Ascending
- Column_Sort_Descending
- Filter_Columns_List
- Search
- Select_All
- ComparisonOperator_Bottom
- ComparisonOperator_BottomPercentile
- ComparisonOperator_Contains
- ComparisonOperator_DoesNotContain
- ComparisonOperator_DoesNotEndWith
- ComparisonOperator_DoesNotMatch
- ComparisonOperator_DoesNotStartWith
- ComparisonOperator_Empty
- ComparisonOperator_EndsWith
- ComparisonOperator_Equals
- ComparisonOperator_False
- ComparisonOperator_GreaterThan
- ComparisonOperator_GreaterThanOrEqualTo
- ComparisonOperator_LastMonth
- ComparisonOperator_LastQuarter
- ComparisonOperator_LastWeek
- ComparisonOperator_LastYear
- ComparisonOperator_LessThan
- ComparisonOperator_LessThanOrEqualTo
- ComparisonOperator_NextMonth
- ComparisonOperator_NextQuarter
- ComparisonOperator_NextWeek
- ComparisonOperator_NextYear
- ComparisonOperator_NotEmpty
- ComparisonOperator_NotEquals
- ComparisonOperator_StartsWith
- ComparisonOperator_ThisMonth
- ComparisonOperator_ThisQuarter
- ComparisonOperator_ThisWeek
- ComparisonOperator_ThisYear
- ComparisonOperator_Today
- ComparisonOperator_Tomorrow
- ComparisonOperator_Top
- ComparisonOperator_TopPercentile
- ComparisonOperator_True
- ComparisonOperator_Yesterday
- Column_Options_Summary_Average
- Column_Options_Summary_Count
- Column_Options_Summary_Maximum
- Column_Options_Summary_Minimum
- Column_Options_Summary_Sum
- Column_Options_Summaries

### Summary Strings

- DataSource_Summary_Avg
- DataSource_Summary_Count
- DataSource_Summary_Max
- DataSource_Summary_Min
- DataSource_Summary_Sum

### Date-Time Column Strings

- January_Full
- January_Short
- February_Full
- February_Short
- March_Full
- March_Short
- April_Full
- April_Short
- May_Full
- May_Short
- June_Full
- June_Short
- July_Full
- July_Short
- August_Full
- August_Short
- September_Full
- September_Short
- October_Full
- October_Short
- November_Full
- November_Short
- December_Full
- December_Short
- Monday_Full
- Monday_Short
- Monday_Single
- Thursday_Single
- Today
- Tuesday_Full
- Tuesday_Short
- Tuesday_Single
- Wednesday_Full
- Wednesday_Short
- Wednesday_Single
- Thursday_Full
- Thursday_Short
- Friday_Full
- Friday_Short
- Friday_Single
- Saturday_Full
- Saturday_Short
- Saturday_Single
- Sunday_Full
- Sunday_Short
- Sunday_Single

### ComboBox Column Strings

- NoMatches

## API References

- `ActualDataSource`
- `SetCustomizedStringAsync`
