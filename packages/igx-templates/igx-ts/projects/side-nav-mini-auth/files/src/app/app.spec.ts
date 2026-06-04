import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxRippleModule } from 'igniteui-angular';
import { App } from './app';
import { provideAuthentication } from './authentication/provide-authentication';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterModule.forRoot([]),
        IgxNavigationDrawerModule,
        IgxNavbarModule,
        IgxRippleModule,
        App
      ],
      providers: [
        ...provideAuthentication()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
