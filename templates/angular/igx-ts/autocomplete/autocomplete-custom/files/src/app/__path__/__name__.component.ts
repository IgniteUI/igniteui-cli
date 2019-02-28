import { Component, Pipe, PipeTransform } from '@angular/core';
import { $(LocalData) } from './towns-data';

@Component({
    selector: 'app-$(filePrefix)',
    templateUrl: './$(filePrefix).component.html',
    styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component {
    public towns: any;
    public townSelected;

    constructor() {
        this.towns = $(LocalData);
    }
}

@Pipe({ name: '$(camelCaseName)StartsWith' })
export class $(ClassName)PipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = '') {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.trim().toLowerCase()));
    }
}

@Pipe({ name: '$(camelCaseName)RegionContains' })
export class $(ClassName)RegionContains implements PipeTransform {
    transform(regions: any[], term = '') {
        return this.filterRegions(regions, term);
    }

    private filterRegions(regions: any[], term: string) {
        return regions.filter((region: any) => this.filterTowns(region.towns, term.trim().toLowerCase()).length > 0);
    }

    private filterTowns(towns: string[], term: string) {
        return towns.filter((town: string) => town.toLowerCase().startsWith(term))
    }
}
