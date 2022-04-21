import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LangingComponent } from './pages/langing/langing.component';


const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LangingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
