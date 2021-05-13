import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracingupdateComponent } from './tracingupdate.component';

describe('TracingupdateComponent', () => {
  let component: TracingupdateComponent;
  let fixture: ComponentFixture<TracingupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracingupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracingupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
