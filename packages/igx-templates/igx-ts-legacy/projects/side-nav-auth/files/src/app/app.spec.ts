import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule } from 'igniteui-angular';
import { App } from './app';
import { AuthenticationModule } from './authentication';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        IgxNavigationDrawerModule,
        AuthenticationModule,
        IgxNavbarModule,
        IgxLayoutModule,
        IgxRippleModule
      ],
      declarations: [
        App
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
