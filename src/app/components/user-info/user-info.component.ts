import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  username:string;

  constructor( private userInfo: UserInfoService) { 
    this.username = "Ivan"
  }

  ngOnInit(): void {
  }

}
