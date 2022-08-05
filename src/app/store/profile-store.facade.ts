import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { ProfileStoreActions } from "./profile-store.action";
import { ProfileStoreSelectors } from "./profile-store.reducer";

@Injectable()
export class ProfileStoreFacade {
  public profile$ = this.store.pipe(select(ProfileStoreSelectors.profile()));

  constructor(private store: Store<any>) {}

  public getProfile(): void {
    this.store.dispatch(ProfileStoreActions.getProfile());
  }
  public saveProfile(data): void {
    this.store.dispatch(ProfileStoreActions.saveProfile(data));
  }
}
