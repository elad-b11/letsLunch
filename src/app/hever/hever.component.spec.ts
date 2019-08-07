import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeverComponent } from './hever.component';

describe('HeverComponent', () => {
  let component: HeverComponent;
  let fixture: ComponentFixture<HeverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
