import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KozComponent } from './koz.component';

describe('KozComponent', () => {
  let component: KozComponent;
  let fixture: ComponentFixture<KozComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KozComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
