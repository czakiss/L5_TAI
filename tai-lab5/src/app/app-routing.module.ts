import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from "./components/blog/blog.component";
import {ContactComponent} from "./components/contact/contact.component";
import {HomeComponent} from "./components/home/home.component";
import {BlogItemDetailsComponent} from "./components/blog-item-details/blog-item-details.component";
import {BlogHomeComponent} from "./components/blog-home/blog-home.component";

const routes: Routes = [
  { path: 'blog-component', component: BlogHomeComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: HomeComponent },
  {path: 'blog/detail/:id',
    component: BlogItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
