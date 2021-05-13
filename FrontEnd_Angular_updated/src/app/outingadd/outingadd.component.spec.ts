import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutingaddComponent } from './outingadd.component';

describe('OutingaddComponent', () => {
  let component: OutingaddComponent;
  let fixture: ComponentFixture<OutingaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutingaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutingaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
