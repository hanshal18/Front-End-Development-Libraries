import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as showdown from 'showdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  markdownBox:any = `
# Hellow World

## Welcome to Markdown Previewer
### created by hanshal18

code like this, \`<span></span>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

be bold like this **bold**... whoa!
Or _italic_. like this
Or... be classy both like this**_both!_**
And scatch the code like this ~~crossing stuff out~~.

here's [hanshal18 github link](https://www.github.com/hanshal18), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- lists works like this.
  - bulletttt.
     - level sabke niklenge.
        - garam hai garam hai.


1. number 1.
1. number 2
1. number 3

![hanshal18](https://gravatar.com/avatar/1cbe80b4be93385f4eb44f3c03a3d175?size=256&cache=1725694469686)
`;
  
  convertToMD() {
    let mdconv = new showdown.Converter().makeHtml(this.markdownBox);
    (document.getElementById('preview') as HTMLDivElement).innerHTML = mdconv;
  }
  title = 'markdown-previewer';
}
