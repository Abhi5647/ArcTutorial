import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervalOperatorComponent } from './interval-operator/interval-operator.component';
import { OperatorsComponent } from './operators/operators.component';

const routes: Routes = [{path:'operator',component:OperatorsComponent},

{path:'interval',component:IntervalOperatorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
