import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { emptyRouteGuard } from '../guards/empty-route.guard';

const routes: Routes = [
    { 
        path: '',
        children: [
          {
            path: 'login',
            component: LoginComponent
          }
        ],
        canActivate: [emptyRouteGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
