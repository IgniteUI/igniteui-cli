import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { defineCustomElements } from '<%=dockManagerPackage%>/loader';
import { <%=ClassName%>Component } from './<%=filePrefix%>.component';

defineCustomElements();

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    <%=ClassName%>Component
  ],
  exports: [
    <%=ClassName%>Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%=ClassName%>Module { }
