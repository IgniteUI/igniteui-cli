import { Component } from '@angular/core';
@Component({
    selector: 'app-$(filePrefix)',
    styleUrls: ['$(filePrefix).component.scss'],
    templateUrl: '$(filePrefix).component.html'
})
export class $(ClassName)Component {
    public items: any[] = [
        { type: 'Fruits', fruits: ['Apple', 'Orange', 'Banana'] },
        { type: 'Vegetables', vegetables: ['Cucumber', 'Potato', 'Pepper'] }
    ];
}
