import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { UtilityService } from "./services/utility.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public currentUrl$: Observable<string>;
  constructor(public utilityService: UtilityService, private router: Router) {
    this.currentUrl$ = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map((event: NavigationEnd) => event.url.replace("/", "")));
  }

  search(event: any): void {
    this.utilityService.send(event.target.value);
  }
}
