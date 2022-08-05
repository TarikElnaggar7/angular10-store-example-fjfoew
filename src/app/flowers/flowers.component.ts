import {
  FerddiesFlowersService,
  IFreddiesFlowers
} from "../services/freddies-flowers.service";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { FlowersDetailsDailogComponent } from "./dialog/flower-details.component";
import { map, withLatestFrom } from "rxjs/operators";
import { UtilityService } from "../services/utility.service";

@Component({
  selector: "app-flowers",
  templateUrl: "./flowers.component.html",
  styleUrls: ["./flowers.component.css"]
})
export class FlowersComponent {
  public flowers$: Observable<IFreddiesFlowers[]>;

  constructor(
    private ferddiesFlowersService: FerddiesFlowersService,
    private dialog: MatDialog,
    private utilityService: UtilityService
  ) {
    this.flowers$ = this.utilityService.message$.pipe(
      withLatestFrom(this.ferddiesFlowersService.flowers()),
      map(([searchString, flowers]) => {
        return flowers.filter(
          flower =>
            flower &&
            (flower.title.toLowerCase().indexOf(searchString) > -1 ||
              flower.content.toLowerCase().indexOf(searchString) > -1)
        );
      })
    );
  }

  public details(flower: IFreddiesFlowers): void {
    const dialogRef = this.dialog.open(FlowersDetailsDailogComponent, {
      data: flower
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
