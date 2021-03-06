import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
  }

  handleLogout(){
    this.userServ.userLogout();

  }

}
