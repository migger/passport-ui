import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportPageViewComponent } from './passport-page-view.component';

describe('PassportPageViewComponent', () => {
  let component: PassportPageViewComponent;
  let fixture: ComponentFixture<PassportPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassportPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
