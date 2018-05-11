import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownPagesViewComponent } from './unknown-pages-view.component';

describe('UnknownPagesViewComponent', () => {
  let component: UnknownPagesViewComponent;
  let fixture: ComponentFixture<UnknownPagesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownPagesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownPagesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
