import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
})
export class AppsPage implements OnInit {

  //currentFood = undefined;

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  direcao(ev: any) {

    let direcao = document.getElementById("contentSlide");

    if (ev === 1) {
      direcao!.scrollLeft -= 1920;
      console.log('esquerda');
    }
    else {
      direcao!.scrollLeft += 1920;
      console.log('direita');
    }
  }

  // customAlertOptions = {
  //   header: 'Selecione a categoria',
  //   translucent: true,
  // };

  // customPopoverOptions = {
  //   header: 'Hair Color',
  //   subHeader: 'Select your hair color',
  //   message: 'Only select your dominant hair color',
  // };

  // customActionSheetOptions = {
  //   header: 'Colors',
  //   subHeader: 'Select your favorite color',
  // };

  // categories = [
  //   {
  //     id: 1,
  //     name: 'Acão',
  //   },
  //   {
  //     id: 2,
  //     name: 'Suspense',
  //   },
  //   {
  //     id: 3,
  //     name: 'Drama',
  //   },
  //   {
  //     id: 4,
  //     name: 'Comédia',
  //   },
  //   {
  //     id: 5,
  //     name: 'Terror',
  //   },
  //   {
  //     id: 6,
  //     name: 'Policial',
  //   },
  //   {
  //     id: 7,
  //     name: 'Guerra',
  //   }
  // ];

  // handleChange(ev: any) {
  //   console.log("Something happent")
  //   this.currentFood = ev.target.value;
  // }
}
