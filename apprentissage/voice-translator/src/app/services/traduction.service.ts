import { Api } from './../models/api.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

// options de la classe http
const httpOptions = {
    headers: new HttpHeaders(
        {
            'content-type': 'application/json',
            'Accept': 'text/html, application/xhtml+xml, */*'
        }
    ),
    responseType: 'json' as 'json',
}

// Ce décorateur permet de rendre le service
// injectable dans le code de fonctionnement
@Injectable({
    providedIn: 'root'
})

export class TranslationService
{
    // déclaration d'une propriété publique api
    // qui contiendra un objet de la classe api du modèle
    public api!: Api
    
    constructor(
        private http: HttpClient
    ){
        this.api = new Api();
        console.log(http);
        
    }

    getParams(txt: string, from: string, to: string){
        return{
            q: txt,
            source: from,
            target: to,
            format: this.api.list.translationApi.format,
        }
    }

    translateTxt(param: object): Observable<object>{
        return this.http.post(this.api.list.translationApi.apiRoot, param, httpOptions)
    }
    
}