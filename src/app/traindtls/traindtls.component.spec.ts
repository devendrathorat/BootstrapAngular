import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraindtlsComponent } from './traindtls.component';

describe('TraindtlsComponent', () => {
  let component: TraindtlsComponent;
  let fixture: ComponentFixture<TraindtlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraindtlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraindtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
