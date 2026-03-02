import { Component } from '@angular/core';
@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: '<%=filePrefix%>.component.html',
  styleUrl: '<%=filePrefix%>.component.scss',
  standalone: false
})
export class <%=ClassName%>Component {
  public items: any[] = [
    { type: 'Fruits', fruits: ['Apple', 'Orange', 'Banana'] },
    { type: 'Vegetables', vegetables: ['Cucumber', 'Potato', 'Pepper'] }
  ];
}
