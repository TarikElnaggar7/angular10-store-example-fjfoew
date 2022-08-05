import { Injectable } from "@angular/core";
import { ofType, Actions, createEffect } from "@ngrx/effects";
import { map } from "rxjs/operators";

import { LocalStorageService } from "ngx-webstorage";
import { ProfileStoreActions } from "./profile-store.action";

@Injectable()
export class ProfileStoreEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}

  public getProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileStoreActions.getProfile),
      map(() =>
        ProfileStoreActions.getProfileSuccess(
          this.localStorageService.retrieve("profile")
        )
      )
    )
  );

  public saveProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileStoreActions.saveProfile),
      map(action => {
        this.localStorageService.store("profile", action);
        return ProfileStoreActions.saveProfileSuccess(action);
      })
    )
  );
}
