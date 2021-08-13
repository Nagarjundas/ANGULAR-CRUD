import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUsersComponent,
    AddUsersComponent,
    EditUserComponent,
    DeleteUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListUsersComponent,
    ViewUsersComponent,
    AddUsersComponent,
    EditUserComponent,
    DeleteUserComponent
  ]
})
export class UsersModule { }
