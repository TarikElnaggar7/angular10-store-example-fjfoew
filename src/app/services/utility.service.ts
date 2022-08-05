import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class UtilityService {
  private _message = new BehaviorSubject<string>("");

  constructor() {}

  get message$(): Observable<string> {
    return this._message.asObservable();
  }

  send(query: string): void {
    this._message.next(query);
  }
}
