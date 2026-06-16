import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ISerie } from '../model/ISerie';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  listaSeries: ISerie[] = [
    {
      nome: 'Breaking Bad',
      lancamento: '2008',
      temporadas: 5,
      classificacao: 10,
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_face/hGwm9Cj3CdbJIqQWNExQqiYmCd4.jpg',
      generos: ['Drama', 'Crime'],
      favorito: false
    },

    {
      nome: 'Stranger Things',
      lancamento: '2016',
      temporadas: 4,
      classificacao: 9,
      cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_face/twfKp60THrcOIep9sjHODOOfO8d.jpg',
      generos: ['Ficção', 'Terror'],
      favorito: false
    }
  ];

  exibirSerie(serie: ISerie) {
    const navigationExtras: NavigationExtras = {
      state: { paramSerie: serie }
    };

    this.router.navigate(['serie-detalhe'], navigationExtras);
  }
  async exibirAlertaFavorito(Serie: ISerie) {
      const alert = await this.alertController.create({
        header: 'Meus Favoritos',
        message: 'Deseja realmente favoritar a serie?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              Serie.favorito = false;
            }
          },
          {
            text: 'Sim, favoritar.',
            handler: () => {
              Serie.favorito = true;
              this.apresentarToast();
            }
          }
        ]
      });
      await alert.present();
    }

    async apresentarToast() {
      const toast = await this.toastController.create({
        message: 'Serie adicionado aos favoritos...',
        duration: 2000,
        color: 'success'
      });
      await toast.present();
    }
}
