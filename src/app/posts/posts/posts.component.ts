import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  constructor(private postService:PostsService) { }
  submitForm(form: NgForm): void {
    this.postService.createPost(form.value);
    console.log(form.value);
    form.reset();
  }
}
