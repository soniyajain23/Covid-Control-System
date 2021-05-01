import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracingaddComponent } from './tracingadd.component';

describe('TracingaddComponent', () => {
  let component: TracingaddComponent;
  let fixture: ComponentFixture<TracingaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracingaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracingaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
