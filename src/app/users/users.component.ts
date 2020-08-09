import { Component, OnInit } from '@angular/core';
import { userService } from './userlist.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  GitHubData : {};
  constructor(private userListService : userService) { }
  
  ngOnInit(): void {
    this.userListService.getUserDetails().subscribe(data => {
    this.GitHubData = data;
    });
  }

}
