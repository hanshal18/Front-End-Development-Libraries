import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    const res = await this.http.get('https://api.quotable.io/quotes/random?limit=1&maxLength=230').subscribe((res: any) => {
      this.quoteText = res[0].content
      this.quoteAuthor = res[0].author
      this.quoteLink = `https://x.com/intent/post?via=hanshal_18&hashtags=quotes&related=freecodecamp&text="${res[0].content}"+${res[0].author}`
    })
  }
  title = 'random quote machine';
}