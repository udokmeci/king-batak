import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IhaleComponent } from './ihale.component';

describe('IhaleComponent', () => {
  let component: IhaleComponent;
  let fixture: ComponentFixture<IhaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
