import { Component, Pipe, PipeTransform } from '@angular/core';
import { Towns } from './towns-data';

@Component({
    selector: 'app-$(filePrefix)',
    templateUrl: './$(filePrefix).component.html',
    styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component {
    public towns: any;
    public townSelected;

    constructor() {
        this.towns = Towns;
    }
}

@Pipe({ name: '$(camelCaseName)StartsWith' })
export class $(ClassName)PipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = '') {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.trim().toLowerCase()));
    }
}
