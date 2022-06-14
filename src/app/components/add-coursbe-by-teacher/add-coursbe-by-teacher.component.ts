import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { book } from 'src/app/test-regi';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-coursbe-by-teacher',
  templateUrl: './add-coursbe-by-teacher.component.html',
  styleUrls: ['./add-coursbe-by-teacher.component.css']
})
export class AddCoursbeByTeacherComponent implements OnInit {
  formsubject !: FormGroup;
  bookList : book[] = [];
  constructor(private AS: FormBuilder,private http: HttpClient) {
    this.formsubject = this.AS.group({
      coursetext_id:['',Validators.required],
      course_Name:['',Validators.required],
      credit:['',Validators.required],
      section:['',Validators.required],
      class_date:['',Validators.required],
      lecturer:['',Validators.required],
      term:['',Validators.required],
      year:['',Validators.required],
    })

   }

  ngOnInit(): void {
  }
  onAddsubject(value : any){
    if(confirm('ต้องการเพิ่มวิชาสอนใช่ไหม ?')){
    this.http.post<any>('http://localhost:3200/regist',value).subscribe(response=> {this.bookList = response})
      this.formsubject.reset();
    }
  }
}
