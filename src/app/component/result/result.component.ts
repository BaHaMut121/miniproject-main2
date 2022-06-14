import { Component, OnInit } from '@angular/core';
import { book } from '../../test-regi';
import { regist55 } from '../../test-regi';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  registList : regist55[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<regist55[]>('http://localhost:3200/registration').subscribe(response=> {this.registList = response})
  }
g(semesterm:string){
  this.http.get<regist55[]>('http://localhost:3200/registration/semesterm/'+semesterm).subscribe(response=> {this.registList = response})
}
}
