import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStore } from '../services/user';
import { Profile } from './profile';

describe('ProfileComponent', () => {
  let component: Profile;
  let fixture: ComponentFixture<Profile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Profile],
      providers: [
        { provide: UserStore, useValue: { currentUser: { name: 'test' } } }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
