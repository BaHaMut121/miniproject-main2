import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { book } from '../../test-regi';

@Component({
  selector: 'app-see-subject',
  templateUrl: './see-subject.component.html',
  styleUrls: ['./see-subject.component.css']
})
export class SeeSubjectComponent implements OnInit {
  bookList:book[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<book[]>('http://localhost:3200/regist').subscribe(response=> {this.bookList = response})
  }
  onSee(lecturer:string){
    this.http.get<book[]>('http://localhost:3200/regist/lecturer/'+lecturer).subscribe(response=> {this.bookList = response})
  }

}
