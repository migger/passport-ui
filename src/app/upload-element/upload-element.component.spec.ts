import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadElementComponent } from './upload-element.component';

describe('UploadElementComponent', () => {
  let component: UploadElementComponent;
  let fixture: ComponentFixture<UploadElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
