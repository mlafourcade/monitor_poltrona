import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  slide_carousel(ev: any) {

    let direcao = document.getElementById("content-slide");

    if (ev === 1) {
      direcao!.scrollLeft -= 1920;
      console.log('esquerda');
    }
    else {
      direcao!.scrollLeft += 1920;
      console.log('direita');
    }
  }

}
