import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Timer from "easytimer.js";
//import FormModule from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],//FormModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  timer = new Timer();

  change(change:any,type:any){
    let breaklength = document.getElementById('break-length') as HTMLInputElement
    let sessionlength = document.getElementById('session-length') as HTMLInputElement
    if(type=='break'){
      if(change=="+"){
        if(breaklength.value=="60") return;
        breaklength.value = `${parseInt(breaklength.value)+1}`
      }else if(change=="-"){
        if(breaklength.value=="0") return;
        breaklength.value = `${parseInt(breaklength.value)-1}`
      }
    }else if(type=='session'){
      if(change=="+"){
        if(sessionlength.value=="60") return;
        sessionlength.value = `${parseInt(sessionlength.value)+1}`
      }else if(change=="-"){
        if(sessionlength.value=="0")return;
        sessionlength.value = `${parseInt(sessionlength.value)-1}`
      }
    }
  }
  runTimer(){
    let timer = document.getElementById('start_stop') as HTMLButtonElement
    let timeleft= document.getElementById('timer-left') as HTMLDivElement
    let sessionlength = document.getElementById('session-length') as HTMLInputElement
    if(timer.innerHTML.includes('play')){
      if(sessionlength.value+":00"==timeleft.innerText){
        this.timer.start({countdown:true, startValues:{minutes:parseInt(sessionlength.value)}});
      }else{
        this.timer.start()
      }

      timer.innerHTML=`<img src="./pause.png" alt="pause">`
      setInterval(() => {
        timeleft.innerText= this.timer.getTimeValues().minutes.toString()+":"+this.timer.getTimeValues().seconds.toString()
      }, 1000);
    }else if(timer.innerHTML.includes('pause')){
      this.timer.pause();
      timer.innerHTML=`<img src="./play.png" alt="play">`
    }
  }
  reset(){
    let breaklength = document.getElementById('break-length') as HTMLInputElement
    let sessionlength = document.getElementById('session-length') as HTMLInputElement
    breaklength.value = "5"
    sessionlength.value = "25"
  }
  title = 'pomodoro-timer';
}
