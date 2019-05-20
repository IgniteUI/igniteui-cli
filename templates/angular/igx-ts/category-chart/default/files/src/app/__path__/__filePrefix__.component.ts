import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component {
  public chartType = 'Auto';

  data = [
    { 'CountryName': 'China', 'Pop1995': 1216, 'Pop2005': 1297, },
    { 'CountryName': 'India', 'Pop1995': 920, 'Pop2005': 1090, },
    { 'CountryName': 'United States', 'Pop1995': 266, 'Pop2005': 295, },
    { 'CountryName': 'Indonesia', 'Pop1995': 197, 'Pop2005': 229, },
    { 'CountryName': 'Brazil', 'Pop1995': 161, 'Pop2005': 186, }
  ];

}
