import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationHomeComponent } from './reparation-home.component';

describe('ReparationHomeComponent', () => {
  let component: ReparationHomeComponent;
  let fixture: ComponentFixture<ReparationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReparationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
