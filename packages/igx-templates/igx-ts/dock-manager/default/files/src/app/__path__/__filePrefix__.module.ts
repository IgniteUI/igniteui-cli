import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%=ClassName%>Component } from './<%=filePrefix%>.component';

import { defineCustomElements } from '<%=dockManagerPackage%>/loader';
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
