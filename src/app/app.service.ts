import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class AppService {

    data: any;
    public ofertas: any[] = [];

    constructor(private httpClient: HttpClient){}

    getOffers(): void {
        this.httpClient.get("assets/ofertas.json").subscribe(data =>{
            console.log(data);
            this.data = data;
            this.leerOfertas();
          });
    }


    public leerOfertas(): void {
        const ofetas: any[] = [];
        for(const data of this.data){
            for(const versionPadre of data.versions){
                for(const caracteristica of versionPadre.characteristics){
                    for(const version of caracteristica.versions){
                        ofetas.push(version);
                    }
                }
            }
        }
        this.ofertas = ofetas;
    }
}