import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWithParameterComponent } from './item-with-parameter.component';

describe('ItemWithParameterComponent', () => {
  let component: ItemWithParameterComponent;
  let fixture: ComponentFixture<ItemWithParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemWithParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWithParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
