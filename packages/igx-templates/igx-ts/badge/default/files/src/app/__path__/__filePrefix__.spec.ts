import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { <%=ClassName%> } from './<%=filePrefix%>';
import { IgxAvatarModule, IgxBadgeModule } from '<%=igxPackage%>';

describe('<%=ClassName%>', () => {
  let component: <%=ClassName%>;
  let fixture: ComponentFixture<<%=ClassName%>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, IgxAvatarModule, IgxBadgeModule, <%=ClassName%>]
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
  });
});
