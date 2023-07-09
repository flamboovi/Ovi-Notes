import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string='http://localhost:3000/post';
  constructor(private http:HttpClient) { }

  //get All Post Data
  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }

  //get Post Data by Id

  getPostById(id:string):Observable<Post>{
    return this.http.get<Post>(this.url+'/'+id)
  }
  //Delete post data

  
  deletePostById(id:string):Observable<Post>{
    return this.http.delete<Post>(this.url+'/'+id)
  }

  
  updatePost(post:Post):Observable<Post>{
    return this.http.put<Post>(this.url+'/'+post._id,post);
  }

  //POst data

  
  createPost(post:Post):Observable<Post>{
    return this.http.post<Post>(this.url,post);
  }
}
