import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeverNotficationComponent } from './hever-notfication.component';

describe('HeverNotficationComponent', () => {
  let component: HeverNotficationComponent;
  let fixture: ComponentFixture<HeverNotficationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeverNotficationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeverNotficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
