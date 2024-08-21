import { TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterModule.forRoot([]),
        IgxNavigationDrawerModule,
        AuthenticationModule,
        IgxNavbarModule,
        IgxLayoutModule,
        IgxRippleModule,
        AppComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
});
