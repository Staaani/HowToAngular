import {createComponent, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatePostComponent} from "./components/create-post/create-post.component";

const routes: Routes = [
 // {path: '', component: HomeComponent};
  {path:'create-post', component: CreatePostComponent},
  //{path:'view-posts', component: ViewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
