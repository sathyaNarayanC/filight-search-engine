import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IData } from '../flightData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private _url = "/assets/data/flight-details.json";
  constructor(private http:HttpClient) { }

  getData():Observable<IData[]>{
    return this.http.get<IData[]>(this._url);
  }
}
