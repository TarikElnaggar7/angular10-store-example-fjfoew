import {
  createFeatureSelector,
  createSelector,
  createReducer,
  on,
  Action
} from "@ngrx/store";
import { ProfileStoreActions } from "./profile-store.action";

export interface IProfile {
  [id: string]: string;
}

export const initialState: IProfile = {};

export class ProfileStoreReducer {
  public static featureSelectorKey = "profile-store";
  public static reducer = _reducer;

  public static _reducer = createReducer(
    initialState,
    on(ProfileStoreActions.getProfile, state => {
      return {
        ...state
      };
    }),
    on(ProfileStoreActions.getProfileSuccess, (state, { ...data }) => {
      return {
        ...state,
        ...data
      };
    }),
    on(ProfileStoreActions.saveProfile, (state, { ...data }) => {
      return {
        ...state,
        ...data
      };
    })
  );
}
export function _reducer(state: IProfile, action: Action) {
  return ProfileStoreReducer._reducer(state, action);
}

export class ProfileStoreSelectors {
  public static feature = createFeatureSelector(
    ProfileStoreReducer.featureSelectorKey
  );

  public static profile = <T extends IProfile>() =>
    createSelector(
      ProfileStoreSelectors.feature,
      (state: IProfile) => {
        return state;
      }
    );
}
