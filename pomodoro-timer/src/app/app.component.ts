import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Timer from "easytimer.js";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  timer = new Timer();
  breakLength = 5;
  sessionLength = 25;
  whatsrunning = 'session'
  change(change:any,type:any){
    if(type=='break'){
      if(change=="+"){
        if(this.breakLength==60) return;
        this.breakLength += 1
      }else if(change=="-"){
        if(this.breakLength==0) return;
        this.breakLength -= 1
      }
    }else if(type=='session'){
      if(change=="+"){
        if(this.sessionLength==60) return;
        this.sessionLength += 1
      }else if(change=="-"){
        if(this.sessionLength==0)return;
        this.sessionLength -= 1
      }
    }
  }

  runTimer(){
    let timer = document.getElementById('start_stop') as HTMLButtonElement
    let timeleft= document.getElementById('timer-left') as HTMLDivElement
    let audio = document.querySelector('audio') as HTMLAudioElement

    if(timer.innerHTML.includes('play')){
      if(this.whatsrunning=="session"){
        this.timer.start({countdown:true, startValues:{minutes:this.sessionLength}});
        
      }else if(this.whatsrunning=="break"){
        this.timer.start({countdown:true, startValues:{minutes:this.breakLength}});
      }else{
        this.timer.start()
      }
      this.timer.addEventListener('secondsUpdated', (e)=>{
        timeleft.innerText= this.timer.getTimeValues().minutes.toString()+":"+this.timer.getTimeValues().seconds.toString()
      })
      this.timer.addEventListener('targetAchieved', (e)=> {
        this.whatsrunning=="session"? this.whatsrunning="break" : this.whatsrunning="session";
        audio.play();
        if(this.whatsrunning=="break"){
          this.timer.start({countdown:true, startValues:{minutes:this.breakLength}});
        }else if(this.whatsrunning=="session"){
          this.timer.start({countdown:true, startValues:{minutes:this.sessionLength}});
        }
      });
      timer.innerHTML=`<img src="./pause.png" alt="pause">`
    }else if(timer.innerHTML.includes('pause')){
      this.timer.pause();
      timer.innerHTML=`<img src="./play.png" alt="play">`
    }
  }

  reset(){  
    this.breakLength = 5
    this.sessionLength = 25
  }
  title = 'pomodoro-timer';
}
