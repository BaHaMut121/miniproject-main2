import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formlogin !: FormGroup;
  constructor(private Fb: FormBuilder ,private service:LoginService) {
    this.formlogin = this.Fb.group({
     username:['',Validators.required],
     password:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
  async addlogin(){
    //console.log(this.formlogin.value);
   const n = await this.service.login(this.formlogin.value.username,this.formlogin.value.password)
if(!n){
  alert("ผิดจ้า")
  this.formlogin.reset();
}
else {
  location.href = 'homepage';
}


  }

}
