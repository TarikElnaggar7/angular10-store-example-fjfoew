import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { IFreddiesFlowers } from "../../services/freddies-flowers.service";

@Component({
  selector: "app-flower-details",
  templateUrl: "./flower-details.component.html",
  styleUrls: ["./flower-details.component.css"]
})
export class FlowersDetailsDailogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IFreddiesFlowers,
    private sanitizer: DomSanitizer
  ) {}
  public sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
