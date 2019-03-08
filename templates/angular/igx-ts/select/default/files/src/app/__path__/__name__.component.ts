import { Component } from '@angular/core';

@Component({
    selector: 'app-$(filePrefix)',
    templateUrl: './$(filePrefix).component.html',
    styleUrls: ['./$(filePrefix).component.scss']
})
export class $(ClassName)Component {
    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango', 'Pineapple'];
}
