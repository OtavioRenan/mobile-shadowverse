import { CardModel } from 'src/app/models/card.model';
import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card/card.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})

export class CardPage implements OnInit
{
  public listCards: Array<CardModel> = [];

  constructor(
    private service: CardService,
    private toast: ToastController
  ) { }

  ngOnInit()
  {
    this.loadCards();
  }

  async presentToast(message: string)
  {
    const toast = await this.toast.create({
      message: message,
      duration: 2000
    });

    toast.present();
  }

  async loadCards()
  {
    await this.service.all().subscribe(
      (cards) => {
        if(cards)
        {
          this.listCards = cards;
        } else {
          this.presentToast('Erro ao carregar as cartas.');
          console.log(cards);
        }
      },
      (e) => {
        this.presentToast('Erro ao carregar as cartas.');
        console.log(e);
      }
    )
  }

}
