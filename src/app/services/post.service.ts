import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:8080/posts'; // Ersetze diese URL durch die deines Backends

  constructor(private http: HttpClient) { }

  createPost(postData: { title: string, content: string }): Observable<Post> {
    const url = `${this.apiUrl}/newPost`;
    return this.http.post<Post>(url, postData);
  }

  getAllPosts(): Observable<Post[]> {
    const url = `${this.apiUrl}/getPosts`;
    return this.http.get<Post[]>(url);
  }



}
