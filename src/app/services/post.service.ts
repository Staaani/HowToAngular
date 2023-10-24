import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:8080/posts/newPost'; // Ersetze diese URL durch die deines Backends

  constructor(private http: HttpClient) { }

  createPost(postData: { title: string, content: string }): Observable<any> {
    return this.http.post(this.apiUrl, postData);
  }
}
