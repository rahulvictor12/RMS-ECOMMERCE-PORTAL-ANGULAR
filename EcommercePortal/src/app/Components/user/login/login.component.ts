import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formModel={
  UserName:'',
  Password:''
}
userDetails:any=[];
  constructor(private service:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null)
    this.router.navigate(['Product']);
  }
onSubmit(form:NgForm)
{
this.service.authenticationUser(form.value).subscribe(
  (res:any)=>{
    localStorage.setItem('token',res.token);
    localStorage.setItem('id',res.id);
    localStorage.setItem('username',res.username);
    localStorage.setItem('address',res.address);
    this.router.navigateByUrl('/Product');
  }
);
}
}
