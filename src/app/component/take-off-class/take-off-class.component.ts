import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-off-class',
  templateUrl: './take-off-class.component.html',
  styleUrls: ['./take-off-class.component.css']
})
export class TakeOffClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    if(confirm('ต้องการถอดวิชาใช่ไหม ?')){

    }
  }
}
