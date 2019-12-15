import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteryoutubeComponent } from './routeryoutube.component';

describe('RouteryoutubeComponent', () => {
  let component: RouteryoutubeComponent;
  let fixture: ComponentFixture<RouteryoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteryoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteryoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
