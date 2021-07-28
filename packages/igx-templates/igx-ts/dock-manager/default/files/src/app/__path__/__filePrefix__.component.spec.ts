import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { <%=ClassName%>Component } from './<%=filePrefix%>.component';

import { defineCustomElements } from '<%=dockManagerPackage%>/loader';
defineCustomElements();

describe('<%=ClassName%>Component', () => {
  let component: <%=ClassName%>Component;
  let fixture: ComponentFixture<<%=ClassName%>Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [<%=ClassName%>Component],
      imports: [CommonModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%=ClassName%>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(document.querySelector('igc-dockmanager')?.constructor).toBe(customElements.get('igc-dockmanager'));
  });
});
