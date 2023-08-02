import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entretenimento',
  templateUrl: './entretenimento.page.html',
  styleUrls: ['./entretenimento.page.scss'],
})
export class EntretenimentoPage implements OnInit {

  currentFood = undefined;

  constructor() { }

  ngOnInit() {
  }
  
  customAlertOptions = {
    header: 'Selecione a categoria',
    translucent: true,
  };

  customPopoverOptions = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color',
  };

  customActionSheetOptions = {
    header: 'Colors',
    subHeader: 'Select your favorite color',
  };

  categories = [
    {
      id: 1,
      name: 'Acão',
    },
    {
      id: 2,
      name: 'Suspense',
    },
    {
      id: 3,
      name: 'Drama',
    },
    {
      id: 4,
      name: 'Comédia',
    },
    {
      id: 5,
      name: 'Terror',
    },
    {
      id: 6,
      name: 'Policial',
    },
    {
      id: 7,
      name: 'Guerra',
    },
    {
      id: 8,
      name: 'Faroeste',
    },
  ];

  slide_carousel(type: string, value: any) {
    let direcao;
    switch(type) {
      case 'movie':
        direcao = document.getElementById("content-movie");
      break;
      case 'serie':
        direcao = document.getElementById("content-serie");
      break;
      case 'music':
        direcao = document.getElementById("content-music");
      break;
      default: 
        direcao = document.getElementById("contentSlide");
      break;
    }

    if (value === 1) {
      direcao!.scrollLeft -= 912;
      console.log('esquerda');
    }
    else {
      direcao!.scrollLeft += 912;
      console.log('direita');
    }
  }

  handleChange(ev: any) {
    console.log("Something happent")
    this.currentFood = ev.target.value;
  }
}
