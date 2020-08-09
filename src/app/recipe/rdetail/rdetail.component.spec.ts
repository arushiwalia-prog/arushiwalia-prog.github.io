import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdetailComponent } from './rdetail.component';

describe('RdetailComponent', () => {
  let component: RdetailComponent;
  let fixture: ComponentFixture<RdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
