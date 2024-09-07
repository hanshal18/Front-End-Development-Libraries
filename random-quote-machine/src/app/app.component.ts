import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  quoteText = `People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.`
  quoteAuthor = `Zig Ziglar`
  quoteLink = `https://x.com/intent/post?via=hanshal_18&hashtags=quotes&related=freecodecamp&text="${this.quoteText}"+${this.quoteAuthor}`
  async newquote() {
    const res:any = await this.http.get('https://api.api-ninjas.com/v1/quotes',{
      headers:{
        "X-Api-Key":environment.apiKey,
      }
    }).subscribe((res: any) => {
      this.quoteText = res[0].quote
      this.quoteAuthor = res[0].author
      this.quoteLink = `https://x.com/intent/post?via=hanshal_18&hashtags=quotes&related=freecodecamp&text="${res[0].quote}"+${res[0].author}`
    })
  }
  title = 'random quote machine';
}
