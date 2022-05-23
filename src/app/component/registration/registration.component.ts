import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { book } from '../../test-regi';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  bookList:book[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get<book[]>('http://localhost:3200/regist').subscribe(response=> {this.bookList = response})
  }
  onConfirm(){
    if(confirm('ยืนยันการลงทะเบียนใช่หรือไม่ ?')){

    }
  }

}
