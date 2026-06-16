import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  listaFilmes: IFilme[] = [
    {
      nome: 'Obsessão',
      lancamento: '2026',
      duracao: '1h40m',
      classificacao: 9,
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_face/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg',
      generos: ['terror', 'drama'],
      pagina: '/obsessao',
      favorito: false
    },
    {
      nome: 'Toy Story 5',
      lancamento: '2026',
      duracao: '1h40m',
      classificacao: 9,
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_face/iwEuq51BV59mm2LgZ42bWgPgagW.jpg',
      generos: ['diversao', 'comedia'],
      pagina: '/toystory5',
      favorito: false
    }
  ];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  exibirFilme(filme: IFilme) {
    const navigationExtras: NavigationExtras = {
      state: { paramFilme: filme }
    };
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            filme.favorito = false;
          }
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }
}
