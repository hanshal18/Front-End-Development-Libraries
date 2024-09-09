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
    let display = document.getElementById('display') as HTMLInputElement
    if (e == "clear") {
      display.value = "0"
    } else if (e == "delete") {
      if(display.value == "0") return;
      display.value = display.value.toString().slice(0, -1)
    } else if (e == "devide") {
      if (display.value == "0") {
        display.value = "0";
      }else if(display.value[display.value.length-1]=="/" || display.value[display.value.length-1]=="*" || display.value[display.value.length-1]=="+" || display.value[display.value.length-1]=="-"){
        display.value = display.value.toString().slice(0, -1)
        display.value+='/'
      } else {
        display.value += "/"
      }
    } else if (e == "multiply") {
      if (display.value == "0") {
        display.value = "0";
      }else if(display.value[display.value.length-1]=="/" || display.value[display.value.length-1]=="*" || display.value[display.value.length-1]=="+" || display.value[display.value.length-1]=="-"){
        display.value = display.value.toString().slice(0, -1)
        display.value+= "*"
      } else {
        display.value += "*"
      }
    } else if (e == "add") {
      if (display.value == "0") {
        display.value = "0";
      }else if(display.value[display.value.length-1]=="/" || display.value[display.value.length-1]=="*" || display.value[display.value.length-1]=="+" || display.value[display.value.length-1]=="-"){
        display.value = display.value.toString().slice(0, -1)
        display.value += "+"
      } else {
        display.value += "+"
      }
    } else if (e == "subtract") {
      if (display.value == "0") {
        display.value = "0";
      }else if(display.value[display.value.length-1]=="/" || display.value[display.value.length-1]=="*" || display.value[display.value.length-1]=="+" || display.value[display.value.length-1]=="-"){
        display.value = display.value.toString().slice(0, -1)
        display.value += "-"
      } else {
        display.value += "-"
      }
    } else if (e == 1 || e == 2 || e == 3 || e == 4 || e == 5 || e == 6 || e == 7 || e == 8 || e == 9 || e == 0) {
      if (display.value == "0") {
        display.value = e
      } else {
        display.value += e
      }
    } else if (e == "." && !display.value.includes('.')) {  
        console.log(display.value.search('.'))
        display.value += e;
    }
  }
  calcu() {
    let display = document.getElementById('display') as HTMLInputElement
    display.value = eval(display.value)
  }

  title = 'calculator';
}
