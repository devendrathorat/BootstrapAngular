import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteldtlsComponent } from './hoteldtls.component';

describe('HoteldtlsComponent', () => {
  let component: HoteldtlsComponent;
  let fixture: ComponentFixture<HoteldtlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoteldtlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteldtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
