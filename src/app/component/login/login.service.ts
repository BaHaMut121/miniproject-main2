import { Injectable } from '@angular/core';
import { flush } from '@angular/core/testing';
import  axios  from 'axios';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  async login(username:string , password:string){
   const logg = await axios({
      method: 'post',
      url: 'http://localhost:3300/login',
      data: {username,password}
    })
console.log(logg.data);
 localStorage.setItem('studen_token',logg.data.TOKEN)
if(logg.data!=='ผิดจ๋า' ){
  return true;
}
return false;
}
}
