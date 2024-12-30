import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {path: '', component: IndexComponent, title: 'MyFootball'},
  {path: '**', pathMatch: 'full', component: NotfoundComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
