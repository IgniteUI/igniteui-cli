import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defineCustomElements } from '<%=dockManagerPackage%>/loader';
import { <%=ClassName%> } from './<%=filePrefix%>';

defineCustomElements();

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [<%=ClassName%>],
      imports: [CommonModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(<%=ClassName%>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(document.querySelector('igc-dockmanager')?.constructor).toBe(customElements.get('igc-dockmanager'));
  });
});
