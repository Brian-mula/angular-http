import { Component, Input } from '@angular/core';
import { PostType } from '../../types/post-type';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  @Input()post!: PostType;
  constructor() { }
 

}
