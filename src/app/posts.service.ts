import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PostType } from './types/post-type';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  posts: PostType[] = [];

  async createPost(post: PostType) {
    this.http
      .post('https://blog-7f459-default-rtdb.firebaseio.com/posts.json', post)
      .subscribe((res) => {
        console.log(res);
      });
  }
   getposts() {
    return this.http
      .get<PostType[]>(
        'https://blog-7f459-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((resData) => {
          const postArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              postArray.push({ ...resData[key], id: key });
            }
          }
          return postArray;
        })
      );
  }
}
