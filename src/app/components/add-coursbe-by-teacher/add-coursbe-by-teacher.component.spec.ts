import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursbeByTeacherComponent } from './add-coursbe-by-teacher.component';

describe('AddCoursbeByTeacherComponent', () => {
  let component: AddCoursbeByTeacherComponent;
  let fixture: ComponentFixture<AddCoursbeByTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoursbeByTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursbeByTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
