import { Component, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { IgxToastComponent, IgxToastPosition, ISelectionEventArgs } from '<%=igxPackage%>';
import { Region, Town, townsExtended } from './towns-data-extended';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss']
})
export class <%=ClassName%>Component {
  public regions!: Region[];
  public townSelected!: string;
  public postalCode?: number;
  public messagePosition = IgxToastPosition.Middle;

  @ViewChild(IgxToastComponent, { static: true })
  public toast!: IgxToastComponent;

  constructor() {
    this.regions = townsExtended;
  }

  public getPostalCode(e: ISelectionEventArgs): void {

    // Flatten the structure of the regions array
    const allTowns = this.regions.map(region => region.towns).reduce((prev, curr) => prev.concat(curr), []);

    const townEntry = allTowns.find(t => t.name === e.newSelection.value);

    this.postalCode = townEntry?.postalCode;
    this.toast.open();
  }
}

@Pipe({ name: '<%=camelCaseName%>StartsWith' })
export class  <%=ClassName%>PipeStartsWith implements PipeTransform {
  public transform(collection: Town[], term = '') {
    return collection.filter(item => item.name.toLowerCase().startsWith(term.trim().toLowerCase()));
  }
}

@Pipe({ name: '<%=camelCaseName%>RegionContains' })
export class <%=ClassName%>RegionContains implements PipeTransform {
  transform(regions: Region[], term = '') {
    return this.filterRegions(regions, term);
  }

  private filterRegions(regions: Region[], term: string) {
    return regions.filter(region => this.filterTowns(region.towns, term.toLowerCase()).length > 0);
  }

  private filterTowns(towns: Town[], term: string) {
    return towns.filter(town => town.name.toLowerCase().startsWith(term));
  }
}
