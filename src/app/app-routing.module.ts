import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { UserDetailsComponent } from "./users/user-details/user-details.component";
import { UsersListComponent } from "./users/users-list/users-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full"
  },
  {
    path: "users",
    component: UsersListComponent
  },
  {
    path: "users/:id",
    component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
