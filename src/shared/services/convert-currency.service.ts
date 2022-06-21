import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ConvertCurrencyService {

  constructor(private http: HttpClient) { }


  convertDevise(deviseInitiale: string, deviseFinale : string, amount: number) : Observable<any>{

    let options_ : any = {
      method: 'GET',
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '910196889cmshbd50f6a50c2d860p1c89a7jsn31b9c4fc5d79',
        'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
      }),
      params: {
        "format" : "json",
        "from": deviseInitiale,
        "to":deviseFinale,
        "amount": amount
      }
    };

    return this.http.get<any[]>(`${environment.currencyAPI['X-RapidAPI-Host']}/currency/convert`, options_);

  }
}
