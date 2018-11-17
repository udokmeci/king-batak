import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YerComponent } from './yer.component';

describe('YerComponent', () => {
  let component: YerComponent;
  let fixture: ComponentFixture<YerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
