import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesteComponent } from './deste.component';

describe('DesteComponent', () => {
  let component: DesteComponent;
  let fixture: ComponentFixture<DesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
