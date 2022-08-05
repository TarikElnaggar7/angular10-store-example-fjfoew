import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";
import { ProfileStoreEffects } from "./profile-store.effects";
import { ProfileStoreFacade } from "./profile-store.facade";
import { ProfileStoreReducer } from "./profile-store.reducer";

@NgModule({
  imports: [
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature(
      ProfileStoreReducer.featureSelectorKey,
      ProfileStoreReducer.reducer
    ),
    EffectsModule.forRoot([ProfileStoreEffects])
  ],
  providers: [ProfileStoreFacade]
})
export class ProfileStoreModule {}
