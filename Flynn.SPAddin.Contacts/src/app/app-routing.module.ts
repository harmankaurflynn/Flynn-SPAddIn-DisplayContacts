import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
    
    {
        path: '', component: AppComponent
        // children:[
        //   { path: ':key', component: DisplayFilesComponent,data: {
        //     breadcrumb: 'files/:key'
        //   }},

        //   { path: ':key', component: DisplayFilesComponent,data: {
        //   breadcrumb: 'files/:key'
        // }}
        //]
    },
    
    {
        path: 'sharedservices/safety/FlynnSPAddinContacts/app/files', component: AppComponent
    },
    {
        path: 'sharedservices/safety/FlynnSPAddinContacts/app/', component: ContactDetailsComponent
    },
    {
        path: 'files', component: AppComponent
    },
    { path: '**', component: ContactDetailsComponent }



   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
