import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';


const routes: Routes = [
  {path: '',redirectTo: '/login',pathMatch: 'full'},
  {path: 'login',component: LoginComponent },
  {path: 'form', component: UserFormComponent },
  {path: 'users', component: UserListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
