import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.page.html',
  styleUrls: ['./audio-player.page.scss'],
})
export class AudioPlayerPage implements OnInit {

  constructor() { }

  ngOnInit() {
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
