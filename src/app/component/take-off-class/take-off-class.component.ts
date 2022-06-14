import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { book } from '../../test-regi';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-take-off-class',
  templateUrl: './take-off-class.component.html',
  styleUrls: ['./take-off-class.component.css']
})
export class TakeOffClassComponent implements OnInit {
  bookList:book[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<book[]>('http://localhost:3200/regist').subscribe(response=> {this.bookList = response})
  }

  onDelete(id:number){
    if(confirm('ต้องการถอดวิชาใช่ไหม ?')){
      this.http.delete<book[]>('http://localhost:3200/regist/'+id).subscribe(responsess=> {this.bookList = responsess})

    }
  }
}
