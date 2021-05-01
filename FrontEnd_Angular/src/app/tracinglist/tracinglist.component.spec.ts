import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracinglistComponent } from './tracinglist.component';

describe('TracinglistComponent', () => {
  let component: TracinglistComponent;
  let fixture: ComponentFixture<TracinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
