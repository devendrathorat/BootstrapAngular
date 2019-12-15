import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusdtlsComponent } from './busdtls.component';

describe('BusdtlsComponent', () => {
  let component: BusdtlsComponent;
  let fixture: ComponentFixture<BusdtlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusdtlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusdtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
