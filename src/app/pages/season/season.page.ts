import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-season',
  templateUrl: './season.page.html',
  styleUrls: ['./season.page.scss'],
})
export class SeasonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isModalOpen1 = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  isModalOpen4 = false;
  isModalOpen5 = false;
  isModalOpen6 = false;

  setOpen(isOpen: number) {
    switch(isOpen) {
      case 0:
        this.isModalOpen1 = false;
        this.isModalOpen2 = false;
        this.isModalOpen3 = false;
        this.isModalOpen4 = false;
        this.isModalOpen5 = false;
        this.isModalOpen6 = false;
      break;
      case 1:
        this.isModalOpen1 = true;
      break;
      case 2:
        this.isModalOpen2 = true;
      break;
      case 3:
        this.isModalOpen3 = true;
      break;
      case 4:
        this.isModalOpen4 = true;
      break;
      case 5:
        this.isModalOpen5 = true;
      break;
      case 6:
        this.isModalOpen6 = true;
      break;
    }
  }

  hideSeason(seasonNumber: number) {

    let seasonId: any;

    switch(seasonNumber) {
      case 1:
        seasonId = document.getElementById("season1");
      break;
      case 2:
        seasonId = document.getElementById("season2");
      break;
      case 3:
        seasonId = document.getElementById("season3");
      break;
      case 4:
        seasonId = document.getElementById("season4");
      break;
      case 5:
        seasonId = document.getElementById("season5");
      break;
    }    

    if (seasonId!.style.display === "none") {
      seasonId!.style.display = "block";
    }
    else {
      seasonId!.style.display = "none";
    }
  }

  vermais() {
    let maisTexto = document.getElementById("season-mais");
    let pontos = document.getElementById("season-pontos");
    let btnVermais = document.getElementById("season-btnVerMais");

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
  }
  
  botaoVoltar() {
    window.history.back();
  }
}
