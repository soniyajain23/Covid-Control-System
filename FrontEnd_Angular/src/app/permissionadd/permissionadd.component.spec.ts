import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionaddComponent } from './permissionadd.component';

describe('PermissionaddComponent', () => {
  let component: PermissionaddComponent;
  let fixture: ComponentFixture<PermissionaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
