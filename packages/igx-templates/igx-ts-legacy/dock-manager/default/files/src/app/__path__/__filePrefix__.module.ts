import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { defineCustomElements } from '<%=dockManagerPackage%>/loader';
import { <%=ClassName%> } from './<%=filePrefix%>';

defineCustomElements();

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    <%=ClassName%>
  ],
  exports: [
    <%=ClassName%>
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%=ClassName%>Module { }
