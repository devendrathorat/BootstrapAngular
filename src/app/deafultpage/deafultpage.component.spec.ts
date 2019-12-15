import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeafultpageComponent } from './deafultpage.component';

describe('DeafultpageComponent', () => {
  let component: DeafultpageComponent;
  let fixture: ComponentFixture<DeafultpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeafultpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeafultpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
