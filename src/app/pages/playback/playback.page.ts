import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playback',
  templateUrl: './playback.page.html',
  styleUrls: ['./playback.page.scss'],
})
export class PlaybackPage implements OnInit {

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
}
