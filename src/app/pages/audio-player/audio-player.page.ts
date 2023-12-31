import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.page.html',
  styleUrls: ['./audio-player.page.scss'],
})
export class AudioPlayerPage implements OnInit {

  public progress = 0;

  constructor() { 

    setInterval(() => {
      this.progress += 0.01;
      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);   
     
  }

  ngOnInit() {

    let slideValue = document.getElementById("customRange");
    if (slideValue != null) {

      // let outputValue = document.getElementById("value");
      // outputValue!.innerHTML = (slideValue as HTMLInputElement).value;
      // slideValue.oninput = function () {
      //   let x = (slideValue as HTMLInputElement).value;
      //   outputValue!.innerHTML = x+'%';
      // }

      slideValue.addEventListener("mousemove", ()=>{
        let x = (slideValue as HTMLInputElement).value;
        let color = 'linear-gradient(90deg, whitesmoke '+x+'%, #767676 '+x+'%)'
        slideValue!.style.background = color;
      })
    }
  }

  
  vermais() {
    let maisTexto = document.getElementById("mais");
    let pontos = document.getElementById("pontos");
    let btnVermais = document.getElementById("btnVerMais");

    if ( (pontos !== null) && (maisTexto !== null) && (btnVermais !== null) ) {
      if (maisTexto.style.display === "none") {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnVermais.innerHTML = " Ver menos";
      }
      else {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnVermais.innerHTML = " Ver mais";
      }
    }
    else 
      console.log("mais = ", maisTexto);

    // if ( (pontos !== null) && (maisTexto !== null) && (btnVermais !== null) ){


    //   if(ev.style.display === "none") {
    //     pontos.style.display = "inline";
    //     maisTexto.style.display = "none";
    //     btnVermais.innerHTML = "Ver mais";
    //   }
    //   else{
    //     pontos.style.display = "none";
    //     maisTexto.style.display = "inline";
    //     btnVermais.innerHTML = "Ver menos";
    //   }
    // }
  }


  botaoVoltar() {
    window.history.back();
  }
}
