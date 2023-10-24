import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  title: string = '';
  content: string = '';

  constructor(private postService: PostService) { }

  createPost(): void {
    this.postService.createPost({ title: this.title, content: this.content })
      .subscribe(response => {
        console.log('Post erfolgreich erstellt:', response);
        // Zurücksetzen der Formulardaten
        this.title = '';
        this.content = '';
      });
  }
}
