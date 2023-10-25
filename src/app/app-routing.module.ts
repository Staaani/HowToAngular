import { RouterModule, Routes } from '@angular/router';
import {CreatePostComponent} from "./components/create-post/create-post.component";
import {ViewPostsComponent} from "./components/view-posts/view-posts.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
 // {path: '', component: HomeComponent};
  {path:'create-post', component: CreatePostComponent},
  {path:'view-posts', component: ViewPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
