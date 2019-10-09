import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CreateComponent }  from './create/create.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path:'' ,pathMatch:'full',component:HomeComponent},
  {path:'create',component:CreateComponent},
  {path:'view',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
