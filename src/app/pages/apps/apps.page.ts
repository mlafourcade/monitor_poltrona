import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
})
export class AppsPage implements OnInit {

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
    }
  ];

  handleChange(ev: any) {
    console.log("Something happent")
    this.currentFood = ev.target.value;
  }
}
