import { Component, Injectable } from '@angular/core';
import { LoginService } from './login.service';
import {Md5} from 'ts-md5/dist/md5'

@Injectable()
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  constructor(
    private service: LoginService
    ){}

  enter(user: String, password: String){
    const md5 = new Md5();
    var newPassword = md5.appendAsciiStr(''+password).end().toLocaleString();
    this.service.getLogin(user, newPassword)
    .subscribe(
      data => {
        if(data){
          console.log("true")
        }else{
          console.log("false");
        }
      },
      err => console.log(err)
    );
  }
}
//test
