import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from "./components/blog/blog.component";
import {ContactComponent} from "./components/contact/contact.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: 'blog-component', component: BlogComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
