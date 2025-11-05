export class DataGridSharedData {
  public static getEmployees(count?: number): any[] {
    if (count === undefined) {
      count = 250;
    }

    const employees: any[] = [];
    let maleCount: number = 0;
    let femaleCount: number = 0;
    for (let i = 0; i < count; i += 1) {
      const age: number = Math.round(this.getRandomNumber(20, 40));
      const gender: string = this.getRandomGender();
      const firstName: string = this.getRandomNameFirst(gender);
      const lastName: string = this.getRandomNameLast();
      const street: string = this.getRandomStreet();
      const country: string = this.getRandomItem(this.countries);
      const city: string = this.getRandomCity(country);
      const generation = `${Math.floor(age / 10) * 10}s`;
      const email: string = `${firstName.toLowerCase()}@${this.getRandomItem(this.emails)}`;
      const website: string = `${firstName.toLowerCase()}-${this.getRandomItem(this.websites)}`;
      let photoPath: any;

      if (gender === 'male') {
        maleCount += 1;
        if (maleCount > 26) {
          maleCount = 1;
        }
        photoPath = this.getPhotoMale(maleCount);
      } else {
        femaleCount += 1;
        if (femaleCount > 24) {
          femaleCount = 1;
        }
        photoPath = this.getPhotoFemale(femaleCount);
      }

      const person: any = {};
      person.Address = `${street},${city}`;
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
      person.Name = `${firstName} ${lastName}`;
      person.Phone = this.getRandomPhone();
      person.Photo = photoPath;
      person.Street = street;
      person.Salary = this.getRandomNumber(40, 200) * 1000;
      person.Sales = this.getRandomNumber(200, 980) * 1000;
      person.Website = website;
      person.Productivity = this.getProductivity();

      if (person.Salary < 50000) {
        person.Income = 'Low';
      } else if (person.Salary < 100000) {
        person.Income = 'Average';
      } else {
        person.Income = 'High';
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
    for (let w = 0; w < weekCount; w += 1) {
      const value = this.getRandomNumber(-50, 50);
      productivity.push({ Value: value, Week: w });
    }
    return productivity;
  }

  public static getSales(count?: number): any[] {
    if (count === undefined) {
      count = 250;
    }

    const names: string[] = [
      'Intel CPU', 'AMD CPU',
      'NVIDIA GPU', 'GIGABYTE GPU', 'Asus GPU', 'AMD GPU', 'MSI GPU',
      'Corsair Memory', 'Patriot Memory', 'Skill Memory',
      'Samsung HDD', 'WD HDD', 'Seagate HDD', 'Intel HDD',
      'Samsung SSD', 'WD SSD', 'Seagate SSD', 'Intel SSD',
      'Samsung Monitor', 'Asus Monitor', 'LG Monitor', 'HP Monitor'];
    const countries: string[] = ['USA', 'UK', 'France', 'Canada', 'Poland', 'Japan', 'Germany'];
    const status: string[] = ['Packing', 'Shipped', 'Delivered'];
    const sales: any[] = [];

    for (let i = 0; i < count; i += 1) {
      const price = this.getRandomNumber(100, 900);
      const items = this.getRandomNumber(10, 80);
      const value = price * items;
      const margin = this.getRandomNumber(3, 10);
      const profit = Math.round((price * (margin / 100)) * items);
      const country = this.getRandomItem(countries);
      sales.push({
        BundlePrice: price,
        ProductPrice: price,
        Margin: margin,
        OrderDate: this.getRandomDate(new Date(2012, 0, 1), new Date()),
        OrderItems: items,
        OrderValue: value, //  Math.round(value / 1000) + ',' + Math.round(value % 1000),
        ProductID: 1001 + i,
        ProductName: this.getRandomItem(names),
        Profit: profit,
        Countries: country,
        CountryFlag: this.getCountryFlag(country),
        Status: this.getRandomItem(status),
      });
    }
    return sales;
  }

  public static getHouses(count?: number): any[] {
    if (count === undefined) {
      count = 250;
    }

    const houses: any[] = [];
    const property: string[] = ['Townhouse', 'Single', 'Condo', 'Villa'];
    const emails: string[] = ['estates.com', 'remax.com', 'zillow.com', 'realtor.com', 'coldwell.com'];
    const countries: string[] = ['USA', 'UK', 'France', 'Canada', 'Poland', 'Japan', 'Germany'];

    for (let i = 0; i < count; i += 1) {
      const year: number = this.getRandomNumber(1950, 2015);
      const age: number = 2020 - year;

      const gender: string = this.getRandomGender();
      const firstName: string = this.getRandomNameFirst(gender);
      const lastName: string = this.getRandomNameLast();
      const initials = firstName.substr(0, 1).toLowerCase();
      const email: string = `${initials + lastName.toLowerCase()}@${this.getRandomItem(emails)}`;

      const street: string = this.getRandomStreet();
      const country: string = this.getRandomItem(countries);
      const city: string = this.getRandomCity(country);

      houses.push({
        Address: `${street},${city}`,
        Age: age,
        Agent: `${firstName} ${lastName}`,
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

  private static websites: string[] = ['.com', '.gov', '.edu', '.org'];

  private static emails: string[] = ['gmail.com', 'yahoo.com', 'twitter.com'];

  private static genders: string[] = ['male', 'female'];

  private static maleNames: string[] = ['Kyle', 'Oscar', 'Ralph', 'Mike', 'Bill', 'Frank', 'Howard', 'Jack', 'Larry', 'Pete', 'Steve', 'Vince', 'Mark', 'Alex', 'Max', 'Brian', 'Chris', 'Andrew', 'Martin', 'Mike', 'Steve', 'Glenn', 'Bruce'];

  private static femaleNames: string[] = ['Gina', 'Irene', 'Katie', 'Brenda', 'Casey', 'Fiona', 'Holly', 'Kate', 'Liz', 'Pamela', 'Nelly', 'Marisa', 'Monica', 'Anna', 'Jessica', 'Sofia', 'Isabella', 'Margo', 'Jane', 'Audrey', 'Sally', 'Melanie', 'Greta', 'Aurora', 'Sally'];

  private static lastNames: string[] = ['Adams', 'Crowley', 'Ellis', 'Martinez', 'Irvine', 'Maxwell', 'Clark', 'Owens', 'Rooney', 'Lincoln', 'Thomas', 'Spacey', 'MOrgan', 'King', 'Newton', 'Fitzgerald', 'Holmes', 'Jefferson', 'Landry', 'Berry', 'Perez', 'Spencer', 'Starr', 'Carter', 'Edwards', 'Stark', 'Johnson', 'Fitz', 'Chief', 'Blanc', 'Perry', 'Stone', 'Williams', 'Lane', 'Jobs', 'Adams', 'Power', 'Tesla'];

  private static countries: string[] = ['USA', 'UK', 'France', 'Canada', 'Poland'];

  private static citiesUS: string[] = ['New York', 'Los Angeles', 'Miami', 'San Francisco', 'San Diego', 'Las Vegas'];

  private static citiesUK: string[] = ['London', 'Liverpool', 'Manchester'];

  private static citiesFR: string[] = ['Paris', 'Marseille', 'Lyon'];

  private static citiesCA: string[] = ['Toronto', 'Vancouver', 'Montreal'];

  private static citiesPL: string[] = ['Krakow', 'Warsaw', 'Wroclaw', 'Gdansk'];

  private static citiesJP: string[] = ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama'];

  private static citiesGR: string[] = ['Berlin', 'Bonn', 'Cologne', 'Munich', 'Hamburg'];

  private static roadSuffixes: string[] = ['Road', 'Street', 'Way'];

  private static roadNames: string[] = ['Main', 'Garden', 'Broad', 'Oak', 'Cedar', 'Park', 'Pine', 'Elm', 'Market', 'Hill'];

  private static getRandomNumber(min: number, max: number): number {
    return Math.round(min + this.secureRandom() * (max - min));
  }

  // Helper to produce a cryptographically secure random float in [0, 1)
  private static secureRandom(): number {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] / 2 ** 32;
  }

  private static getRandomItem(array: any[]): any {
    const index = Math.round(this.getRandomNumber(0, array.length - 1));
    return array[index];
  }

  private static getRandomDate(start: Date, end: Date) {
    return new Date(start.getTime() + this.secureRandom() * (end.getTime() - start.getTime()));
  }

  private static getRandomPhone(): string {
    const phoneCode = this.getRandomNumber(100, 900);
    const phoneNum1 = this.getRandomNumber(100, 900);
    const phoneNum2 = this.getRandomNumber(1000, 9000);
    const phone = `${phoneCode}-${phoneNum1}-${phoneNum2}`;
    return phone;
  }

  private static getRandomGender(): string {
    return this.getRandomItem(this.genders);
  }

  private static getRandomNameLast(): string {
    return this.getRandomItem(this.lastNames);
  }

  private static getRandomNameFirst(gender: string): string {
    if (gender === 'male') {
      return this.getRandomItem(this.maleNames);
    }

    return this.getRandomItem(this.femaleNames);
  }

  private static getRandomCity(country: string): string {
    if (country === 'Canada') {
      return this.getRandomItem(this.citiesCA);
    } if (country === 'France') {
      return this.getRandomItem(this.citiesFR);
    } if (country === 'Poland') {
      return this.getRandomItem(this.citiesPL);
    } if (country === 'USA') {
      return this.getRandomItem(this.citiesUS);
    } if (country === 'Japan') {
      return this.getRandomItem(this.citiesJP);
    } if (country === 'Germany') {
      return this.getRandomItem(this.citiesGR);
    } // if (country === 'United Kingdom')
    return this.getRandomItem(this.citiesUK);
  }

  private static getRandomStreet(): string {
    const num = Math.round(this.getRandomNumber(100, 300)).toString();
    const road = this.getRandomItem(this.roadNames);
    const suffix = this.getRandomItem(this.roadSuffixes);
    return `${num} ${road} ${suffix}`;
  }

  private static getBirthday(age: number): Date {
    const today: Date = new Date();
    const year: number = today.getFullYear() - age;
    const month: number = this.getRandomNumber(0, 8);
    const day: number = this.getRandomNumber(10, 27);
    return new Date(year, month, day);
  }

  private static getPhotoMale(id: number): string {
    return `https://static.infragistics.com/xplatform/images/people//GUY${this.pad(id, 2)}.png`;
  }

  private static getPhotoFemale(id: number): string {
    return `https://static.infragistics.com/xplatform/images/people/GIRL${this.pad(id, 2)}.png`;
  }

  private static getGenderPhoto(gender: string): string {
    return `https://static.infragistics.com/xplatform/images/genders/${gender}.png`;
  }

  private static getCountryFlag(country: string): string {
    return `https://static.infragistics.com/xplatform/images/flags/${country}.png`;
  }

  private static pad(num: number, size: number) {
    let s = `${num}`;
    while (s.length < size) {
      s = `0${s}`;
    }
    return s;
  }
}
