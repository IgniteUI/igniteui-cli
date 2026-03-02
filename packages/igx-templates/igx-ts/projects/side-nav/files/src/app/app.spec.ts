import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule } from 'igniteui-angular';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        IgxLayoutModule,
        IgxNavbarModule,
        IgxNavigationDrawerModule,
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
