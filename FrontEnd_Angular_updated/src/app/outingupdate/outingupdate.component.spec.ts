import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutingupdateComponent } from './outingupdate.component';

describe('OutingupdateComponent', () => {
  let component: OutingupdateComponent;
  let fixture: ComponentFixture<OutingupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutingupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutingupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
