import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardModel } from 'src/app/models/card.model';

@Injectable({
  providedIn: 'root'
})

export class CardService
{

  //private readonly BASE_URL: string = 'https://shadowverse-portal.com/api/v1/cards?format=json&clan=0,6&lang=en';
  private readonly BASE_URL: string = 'https://raw.githubusercontent.com/OtavioRenan/mobile-shadowverse/master/datas/cards.json';

  constructor(
    protected httpClient: HttpClient
  ) { }

  public all() : Observable<Array<CardModel>>
  {
    return this.httpClient.get<Array<CardModel>>(this.BASE_URL);
  }
}
