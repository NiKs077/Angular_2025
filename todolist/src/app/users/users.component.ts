import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../assets/data/dummy-users';



const randomUser=Math.floor(Math.random() * DUMMY_USERS.length); 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  selectedUser=DUMMY_USERS[randomUser];
  ngOnInit(){
    console.log(this.selectedUser);
  }
 public  get userAvatar(){
  return `assets/users/${this.selectedUser.avatar}`;
  }

  protected displayUserDetails(){
    this.selectedUser=DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
  }

}
