import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { book } from '../../test-regi';
import { FormGroup , FormBuilder ,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  bookList:book[] = [];

  formregist !: any
  constructor(private http: HttpClient,private Fb: FormBuilder) {

  }
  cid !:any
  cNa !:any
  cced !:any
  csec !:any
  cclass !:any
  clect !:any
  cyear !:any



  select(coursetext_id1:any ,course_Name1:any,credit1:any,section1:any,class_date1:any,lecturer1:any,year1:any){
 //console.log(coursetext_id,course_Name,credit,section,class_date,lecturer,year);
this.cid = coursetext_id1
this.cNa = course_Name1
this.cced = credit1
this.csec = section1
this.cclass = class_date1
this.clect = lecturer1
this.cyear = year1

this.formregist = new FormGroup({
  'subject_id' : new FormControl(this.cid),
  'subject' : new FormControl(this.cNa),
  'Grade' : new FormControl(this.cced),
  'regis_sec' : new FormControl(this.csec),
  'regis_date' : new FormControl(this.cclass),
  'regist_lecturer' : new FormControl(this.clect),
  'semesterm' : new FormControl(this.cyear),
})
//console.log(this.formregist.value);
this.http.post<book[]>('http://localhost:3300/registration',this.formregist.value).subscribe(response=> {this.bookList = response})
}




  ngOnInit(): void {
      this.http.get<book[]>('http://localhost:3200/regist').subscribe(response=> {this.bookList = response})
  }
  onConfirm(){
    if(confirm('ยืนยันการลงทะเบียนใช่หรือไม่ ?')){

    // console.log(this.formregist.value);

    }
  }


}
