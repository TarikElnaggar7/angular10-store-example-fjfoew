import { createAction, props } from "@ngrx/store";

export class ProfileStoreActions {
  public static saveProfile = createAction(
    "[Profile] Save profile data",
    props<{
      name: string;
      phone: string;
      email: string;
      address: string;
    }>()
  );

  public static saveProfileSuccess = createAction(
    "[Profile] Save profile data success",
    props<{
      name: string;
      phone: string;
      email: string;
      address: string;
    }>()
  );

  public static saveProfileFailure = createAction(
    "[Profile] Save profile data failure",
    props<{ error: Error }>()
  );

  public static getProfile = createAction("[Profile] Get profile data");
  public static getProfileSuccess = createAction(
    "[Profile] Get profile data success",
    props<{
      name: string;
      phone: string;
      email: string;
      address: string;
    }>()
  );
}
