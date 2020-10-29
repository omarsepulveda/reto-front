import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class AppService {

    data: any;

    constructor(private httpClient: HttpClient){}

    getOffers(): void {
        this.httpClient.get("assets/ofertas.json").subscribe(data =>{
            console.log(data);
            this.data = data;
          });
    }

}