import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElComponent } from './el.component';

describe('ElComponent', () => {
  let component: ElComponent;
  let fixture: ComponentFixture<ElComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
