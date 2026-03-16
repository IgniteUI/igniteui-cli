import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule } from 'igniteui-angular';
import { App } from './app';
import { AuthenticationModule } from './authentication';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterModule.forRoot([]),
        IgxNavigationDrawerModule,
        AuthenticationModule,
        IgxNavbarModule,
        IgxLayoutModule,
        IgxRippleModule,
        App
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
