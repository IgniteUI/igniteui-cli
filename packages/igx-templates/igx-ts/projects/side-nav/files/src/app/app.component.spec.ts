import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule } from 'igniteui-angular';
describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        IgxNavigationDrawerModule,
        IgxNavbarModule,
        IgxLayoutModule,
        IgxRippleModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
});
