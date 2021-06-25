import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { HtmlFeatureHandlerComponent } from './pages/bemo-data/bemo-data.component';


const routes: Routes = [
{ path: '', redirectTo: 'bemoData', pathMatch: 'full' },
{ path: 'login', redirectTo: 'bemoData', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'bemoData', component: HtmlFeatureHandlerComponent },
{ path: 'pageNotFound', component: PageNotFoundComponent },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [  LoginComponent,   PageNotFoundComponent ]
