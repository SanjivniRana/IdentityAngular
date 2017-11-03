import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomergridComponent } from './customergrid.component';

describe('CustomergridComponent', () => {
  let component: CustomergridComponent;
  let fixture: ComponentFixture<CustomergridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomergridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomergridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
