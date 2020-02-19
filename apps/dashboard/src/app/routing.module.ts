import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { LoginComponent } from '@fruits/ui-login';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

