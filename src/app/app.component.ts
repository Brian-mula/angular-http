import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';

  constructor(private http:HttpClient) { }

  submitForm(form: NgForm): void {
    this.http.post('https://blog-7f459-default-rtdb.firebaseio.com/posts.json',form.value).subscribe(res=>{
      console.log(res);
    })
    console.log(form.value);
  }
}
