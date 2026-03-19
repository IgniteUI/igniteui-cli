import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStore } from '../services/user-store';
import { Profile } from './profile';

describe('Profile', () => {
  let component: Profile;
  let fixture: ComponentFixture<Profile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profile],
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
