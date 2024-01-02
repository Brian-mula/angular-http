import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PostsService } from '../../posts.service';
import { PostType } from '../../types/post-type';
import { PostItemComponent } from "../post-item/post-item.component";

@Component({
    selector: 'app-posts',
    standalone: true,
    templateUrl: './posts.component.html',
    styleUrl: './posts.component.css',
    imports: [FormsModule, CommonModule, PostItemComponent]
})
export class PostsComponent  {
  constructor(private postService:PostsService) { }
  allPosts:PostType[] = [];

  submitForm(form: NgForm): void {
    this.postService.createPost(form.value);
    console.log(form.value);
    form.reset();
  }

  ngOnInit(): void {
    this.postService.getposts().subscribe(posts=>{
      this.allPosts=posts;
    });
   // this.allPosts=this.postService.posts;
    console.log(this.allPosts);
  }
}
