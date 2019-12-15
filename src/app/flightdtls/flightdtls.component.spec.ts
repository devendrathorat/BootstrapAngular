import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightdtlsComponent } from './flightdtls.component';

describe('FlightdtlsComponent', () => {
  let component: FlightdtlsComponent;
  let fixture: ComponentFixture<FlightdtlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightdtlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightdtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
