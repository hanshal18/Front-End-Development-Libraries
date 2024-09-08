import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  display(e: any) {
    let display = document.getElementById('display') as HTMLSpanElement
    if (e == "clear") {
      display.innerText = "0"
    } else if (e == "delete") {
      display.innerText = display.innerText.toString().slice(0, -1)
    } else if (e == "devide") {
      if (display.innerText == "0") {
        display.innerText = "0";
      }else if(display.innerText[display.innerText.length-1]=="/" || display.innerText[display.innerText.length-1]=="*" || display.innerText[display.innerText.length-1]=="+" || display.innerText[display.innerText.length-1]=="-"){
        return;
      } else {
        display.innerText += "/"
      }
    } else if (e == "multiply") {
      if (display.innerText == "0") {
        display.innerText = "0";
      }else if(display.innerText[display.innerText.length-1]=="/" || display.innerText[display.innerText.length-1]=="*" || display.innerText[display.innerText.length-1]=="+" || display.innerText[display.innerText.length-1]=="-"){
        return;
      } else {
        display.innerText += "*"
      }
    } else if (e == "add") {
      if (display.innerText == "0") {
        display.innerText = "0";
      }else if(display.innerText[display.innerText.length-1]=="/" || display.innerText[display.innerText.length-1]=="*" || display.innerText[display.innerText.length-1]=="+" || display.innerText[display.innerText.length-1]=="-"){
        return;
      } else {
        display.innerText += "+"
      }
    } else if (e == "subtract") {
      if (display.innerText == "0") {
        display.innerText = "0";
      }else if(display.innerText[display.innerText.length-1]=="/" || display.innerText[display.innerText.length-1]=="*" || display.innerText[display.innerText.length-1]=="+" || display.innerText[display.innerText.length-1]=="-"){
        return;
      } else {
        display.innerText += "-"
      }
    } else if (e == 1 || e == 2 || e == 3 || e == 4 || e == 5 || e == 6 || e == 7 || e == 8 || e == 9 || e == 0) {
      if (display.innerText == "0") {
        display.innerText = e
      } else {
        display.innerText += e
      }
    } else if (e == "." && !display.innerText.includes('.')) {  
        console.log(display.innerText.search('.'))
        display.innerText += e;
    }
  }
  calcu() {
    let display = document.getElementById('display') as HTMLSpanElement
    display.innerText = eval(display.innerText)
  }
  title = 'calculator';
}

