import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, AnimationController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-serie-describe',
  templateUrl: './serie-describe.page.html',
  styleUrls: ['./serie-describe.page.scss'],
})

export class SerieDescribePage implements OnInit {

  season: string | null = '';
  public alertButtons = ['OK'];
  gotopage = false;
  message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private animationCtrl: AnimationController,
    private modalCtrl: ModalController,
    private router: Router,
  ) { }

  // enterAnimation = (baseEl: HTMLElement) => {
  //   const root = baseEl.shadowRoot;

  //   const backdropAnimation = this.animationCtrl
  //     .create()
  //     .addElement(root!.querySelector('ion-backdrop')!)
  //     .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

  //   const wrapperAnimation = this.animationCtrl
  //     .create()
  //     .addElement(root!.querySelector('.modal-wrapper')!)
  //     .keyframes([
  //       { offset: 0, opacity: '0', transform: 'scale(0)' },
  //       { offset: 1, opacity: '0.99', transform: 'scale(1)' },
  //     ]);

  //   return this.animationCtrl
  //     .create()
  //     .addElement(baseEl)
  //     .easing('ease-out')
  //     .duration(500)
  //     .addAnimation([backdropAnimation, wrapperAnimation]);
  // };

  // leaveAnimation = (baseEl: HTMLElement) => {
  //   return this.enterAnimation(baseEl).direction('reverse');
  // };


  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Alert',
  //     subHeader: 'Important message',
  //     message: 'This is an alert!',
  //     animated: true,
  //     buttons: ['OK'],
  //   });

  //   await alert.present();
  // }

  ngOnInit() {
    this.season = this.route.snapshot.paramMap.get('season');
  }

  async openModal() {
    // const modal = await this.modalCtrl.create({
    //   component: ModalExampleComponent,
    // });
    // modal.present();

    // const { data, role } = await modal.onWillDismiss();

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }
  }

  isModalOpen1 = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  isModalOpen4 = false;
  isModalOpen5 = false;
  isModalOpen6 = false;

  setOpen(isOpen: number) {

    console.log("isOpen = ", isOpen)

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
      case 99:
        this.isModalOpen1 = false;
        this.isModalOpen2 = false;
        this.isModalOpen3 = false;
        this.isModalOpen4 = false;
        this.isModalOpen5 = false;
        this.isModalOpen6 = false;
        //this.router.navigateByUrl('/playback/series/1');
      break;
      default:
      break;
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
