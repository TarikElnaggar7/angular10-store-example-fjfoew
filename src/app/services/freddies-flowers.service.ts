import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import * as data from "./sample";

export interface IDeliveryDays {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
}

export interface IFreddiesFlowers {
  id: number;
  arrangement: string;
  title: string;
  content: string;
  image_url: string;
  video_url: string;
  delivery_days: IDeliveryDays;
  deliveries_start_at: string;
  week: number;
  year: number;
}
@Injectable()
export class FerddiesFlowersService {
  constructor(public http: HttpClient) {}

  public flowers(): Observable<IFreddiesFlowers[]> {
    // return this.http.get(environment.apiUrl);
    return of(data.flowers);
  }
}
