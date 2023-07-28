import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {

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
