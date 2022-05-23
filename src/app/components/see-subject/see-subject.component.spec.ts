import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSubjectComponent } from './see-subject.component';

describe('SeeSubjectComponent', () => {
  let component: SeeSubjectComponent;
  let fixture: ComponentFixture<SeeSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
