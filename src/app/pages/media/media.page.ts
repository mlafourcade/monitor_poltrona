import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

let textOrigin: string = 'all';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {

  currentFood = undefined;
  type: string | null = '';
  windowTitle: string = 'Midia';

  constructor(
    private route: ActivatedRoute,
  ) { 

  }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    switch(this.type) {
      case 'movies':
        this.windowTitle = 'Filmes'
      break;
      case 'series':
        this.windowTitle = 'Séries'
      break;
      case 'documentaries':
        this.windowTitle = 'Documentários'
      break;
      case 'music':
        this.windowTitle = 'Músicas'
      break;
      default:
        this.type = 'movies';
        this.windowTitle = 'Filmes'
      break;
    }

    //let typeText = document.getElementById(this.type);
    //let typeOrigin = document.getElementById(textOrigin);

    //console.log('this.type = ', this.type);
    //console.log('this.origin = ', textOrigin);
    
    //if ( (typeText !== null) && (typeOrigin !== null) ){
    //  typeText.style.background = '#F5400E';
    //  typeOrigin.style.background = '#272626';

      //console.log('typeText.className = ', typeText.className);

      // if ( typeText.classList.contains('watch-button-outline') ) {
      //   typeText.classList.remove('watch-button-outline');
      //   typeText.classList.add('watch-button-red');
      //   console.log('*** apagou a classe ***');
      // }
      //typeOrigin.classList.add('watch-button-outline');

      //typeText.className.replace('watch-button-outline','watch-button-red');
      //typeOrigin.className = 'watch-button-outline';

      //console.log('typeText.className.changed = ', typeText.className);
    //}
    //textOrigin = this.type;
    //console.log('this.origin.changed = ', textOrigin);
  }

  customAlertOptions = {
    header: 'Selecione a categoria',
    translucent: true,
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
      id: 3,
      name: 'Comédia',
    },
    {
      id: 3,
      name: 'Terror',
    },
    {
      id: 3,
      name: 'Policial',
    },
    {
      id: 3,
      name: 'Guerra',
    },
    {
      id: 3,
      name: 'Cupcakes',
    },
    {
      id: 3,
      name: 'Faroeste',
    },
  ];

  handleChange(ev: any) {
    console.log("Something happent")
    this.currentFood = ev.target.value;
  }
}
