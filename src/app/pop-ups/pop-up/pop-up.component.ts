import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegistrationComponent } from 'src/app/component/registration/registration.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(
    private dialogref: MatDialogRef<PopUpComponent>,
  ) { }

  ngOnInit(): void {
  }
  onClickCancel(): void{
    this.dialogref.close();
  }

}
