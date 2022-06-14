import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { PopUpComponent } from 'src/app/pop-ups/pop-up/pop-up.component';
import { HttpClient } from '@angular/common/http';
import { book } from '../../test-regi';


@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {
  bookList:book[] = [];
  constructor(private dialog: MatDialog,private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<book[]>('http://localhost:3200/regist').subscribe(response=> {this.bookList = response})
  }
  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    this.dialog.open(PopUpComponent);
  }
}
