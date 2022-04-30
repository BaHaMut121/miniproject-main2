import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOffClassComponent } from './take-off-class.component';

describe('TakeOffClassComponent', () => {
  let component: TakeOffClassComponent;
  let fixture: ComponentFixture<TakeOffClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeOffClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOffClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
