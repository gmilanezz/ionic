import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IAtor } from '../model/IAtor';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  listaAtores: IAtor[] = [
    {
      nome: 'Michael Johnston',
      nascimento: '22/02/1996',
      nacionalidade: 'americano',
      foto: 'https://media.themoviedb.org/t/p/w300_and_h450_face/fbpcCkBzu43kMdlXxEAMuLhseL8.jpg',
      favorito: false
    },

    {
      nome: 'Robert Downey Jr.',
      nascimento: '04/04/1965',
      nacionalidade: 'Americano',
      foto: 'https://media.themoviedb.org/t/p/w300_and_h450_face/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
      favorito: false
    }
  ];

  exibirAtor(ator: IAtor) {
    const navigationExtras: NavigationExtras = {
      state: { paramAtor: ator }
    };

    this.router.navigate(['ator-detalhe'], navigationExtras);
  }
  async exibirAlertaFavorito(Ator: IAtor) {
        const alert = await this.alertController.create({
          header: 'Meus Favoritos',
          message: 'Deseja realmente favoritar o ator?',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
                Ator.favorito = false;
              }
            },
            {
              text: 'Sim, favoritar.',
              handler: () => {
                Ator.favorito = true;
                this.apresentarToast();
              }
            }
          ]
        });
        await alert.present();
      }

      async apresentarToast() {
        const toast = await this.toastController.create({
          message: 'Ator adicionado aos favoritos...',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
      }
}
