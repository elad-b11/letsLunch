import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalNotificationComponent } from './personal-notification.component';

describe('PersonalNotificationComponent', () => {
  let component: PersonalNotificationComponent;
  let fixture: ComponentFixture<PersonalNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
