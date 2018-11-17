import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OyunComponent } from './oyun.component';

describe('OyunComponent', () => {
  let component: OyunComponent;
  let fixture: ComponentFixture<OyunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OyunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OyunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
