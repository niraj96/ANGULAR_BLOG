import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  showLoginPage:boolean = true;
  signupForm: FormGroup;
  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private userServ: UserService, private route: Router) { 
    if(localStorage.getItem('token')){
      this.route.navigate['/dashboard'];
    }
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      uname: ['', [Validators.required]],
      uemail: ['', [Validators.required, Validators.email]],
      upassword: ['', [Validators.required, Validators.minLength(5)]]
    });

    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
    
  }

  swicthOption(option:boolean){
    this.showLoginPage = option;
  }

  handleSigninForm(form:FormGroup){
    this.userServ.afterSignin(form.value).subscribe(data=>{

      localStorage.setItem('token', data['token']);
      this.route.navigate(['/dashboard']);

    }, err=>{
      alert(err.error);
      console.log(err.error);
    })

  }

  handleSignupForm(form:FormGroup){

    let {uname, uemail, upassword} = form.value;
    let postData = {name: uname, email: uemail, password: upassword}

    this.userServ.afterSignup(postData).subscribe(data =>{
      
      localStorage.setItem('token', data['token']);
      
      this.route.navigate(['/dashboard']);

    }, err=>{
      console.log(err);
    });
    

  }


}
