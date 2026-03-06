import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserService } from '../services/user.service';
import { Profile } from './profile';

describe('ProfileComponent', () => {
  let component: Profile;
  let fixture: ComponentFixture<Profile>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Profile],
      providers: [
        { provide: UserService, useValue: { currentUser: { name: 'test' } } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
