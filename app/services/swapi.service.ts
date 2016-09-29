import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface SWApiObject {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface SWApiResponse {
    count: number;
    next: string;
    previous?: any;
    results: SWApiObject[];
}

@Injectable()
export class SwapiService {
  constructor(private http: Http) { }

  private baseUrl = 'http://swapi.co/api/';

  getPeople(page: number = null): Observable<SWApiObject[]> {
    let completeUrl: string = this.baseUrl + 'people/';
    if(page){completeUrl += '?page=' + page}
      return this.getCall(completeUrl).map(resp =>{
          return resp.results;
      });
  }

  getPerson(id: number): Observable<SWApiObject> {
    let completeUrl: string = this.baseUrl + 'people/' + id + '/';
    return this.getCall(completeUrl);
  }

  private getCall(url: string){
    console.log(url);
    return this.http.get(url)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error._body}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
