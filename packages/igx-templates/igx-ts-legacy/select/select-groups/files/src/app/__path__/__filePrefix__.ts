import { Component } from '@angular/core';
@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: '<%=filePrefix%>.html',
  styleUrl: '<%=filePrefix%>.scss',
  standalone: false
})
export class <%=ClassName%> {
  public items: any[] = [
    { type: 'Fruits', fruits: ['Apple', 'Orange', 'Banana'] },
    { type: 'Vegetables', vegetables: ['Cucumber', 'Potato', 'Pepper'] }
  ];
}
