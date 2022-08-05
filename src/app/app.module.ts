import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FerddiesFlowersService } from "./services/freddies-flowers.service";

import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlowersComponent } from "./flowers/flowers.component";
import { FlowersDetailsDailogComponent } from "./flowers/dialog/flower-details.component";
import { UtilityService } from "./services/utility.service";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileStoreModule } from "./store/profile-store.module";
import { NgxWebstorageModule } from "ngx-webstorage";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./app.reducer";

@NgModule({
  declarations: [
    AppComponent,
    FlowersComponent,
    ProfileComponent,
    FlowersDetailsDailogComponent
  ],
  entryComponents: [FlowersDetailsDailogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    StoreModule.forRoot(reducers, { metaReducers }),

    ProfileStoreModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [FerddiesFlowersService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
