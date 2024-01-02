import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PostType } from "./types/post-type";

@Injectable({providedIn:'root'})
export class PostsService{
constructor(private http:HttpClient){}

async createPost(post:PostType){
    this.http.post('https://blog-7f459-default-rtdb.firebaseio.com/posts.json',post).subscribe(res=>{
      console.log(res);
    })
}
}