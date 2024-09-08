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
  drumBtn(e:any){
    let audio:any = document.querySelector(`audio[data-key="${e}"]`);
    let display:any = document.getElementById('display')
    audio.play();
    if(String(e)==="81") display.innerHTML="Heater-1"
    if(String(e)==="87") display.innerHTML="Heater-2"
    if(String(e)==="69") display.innerHTML="Heater-3"
    if(String(e)==="65") display.innerHTML="Heater-4"
    if(String(e)==="83") display.innerHTML="Calp"
    if(String(e)==="68") display.innerHTML="Open-HH"
    if(String(e)==="90") display.innerHTML="Kick-n'-hat"
    if(String(e)==="88") display.innerHTML="Kick"
    if(String(e)==="67") display.innerHTML="Closed-HH"
  }
  title = 'drum-machine';
}
