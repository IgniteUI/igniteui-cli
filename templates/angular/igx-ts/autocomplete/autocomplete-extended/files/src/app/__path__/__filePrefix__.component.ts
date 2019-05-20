import { Component, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { townsExtended } from './towns-data-extended';
import { IgxToastComponent, IgxToastPosition } from 'igniteui-angular';

@Component({
    selector: 'app-$(filePrefix)',
    templateUrl: './$(filePrefix).component.html',
    styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component {
    public extendedTowns: any;
    public townSelected: string;
    public postalCode: string;
    public messagePosition = IgxToastPosition.Middle;

    @ViewChild(IgxToastComponent)
    public toast: IgxToastComponent;

    constructor() {
        this.extendedTowns = townsExtended;
    }

    public getPostalCode(event) {
        const targetRegion = this.extendedTowns.regions.filter((r) => r.name === event.newSelection.group.label)[0];
        this.postalCode = targetRegion.towns.filter(t => t.name === event.newSelection.value)[0].postalCode;
        this.toast.show();
    }
}

@Pipe({ name: '$(camelCaseName)StartsWith' })
export class  $(ClassName)PipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = '') {
        return collection.filter((item) => item.name.toString().toLowerCase().startsWith(term.trim().toLowerCase()));
    }
}

@Pipe({ name: '$(camelCaseName)RegionContains' })
export class $(ClassName)RegionContains implements PipeTransform {
    transform(regions: any[], term = '') {
        return this.filterRegions(regions, term);
    }

    private filterRegions(regions: any[], term: string) {
        return regions.filter((region: any) => this.filterTowns(region.towns, term.toLowerCase()).length > 0);
    }

    private filterTowns(towns: any[], term: string) {
        return towns.filter((town: any) => town.name.toLowerCase().startsWith(term));
    }
}
