import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariableComponent } from './variable/variable.component';


const routes: Routes = [
  {
    path: '',
    component: VariableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
