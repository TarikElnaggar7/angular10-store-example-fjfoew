import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProfileStoreFacade } from "../store/profile-store.facade";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private profileFacade: ProfileStoreFacade) {
    this.userForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required)
    });
    this.profileFacade.profile$.subscribe(profile => {
      this.userForm.get("name").setValue(profile.name);
      this.userForm.get("email").setValue(profile.email);
      this.userForm.get("phone").setValue(profile.phone);
      this.userForm.get("address").setValue(profile.address);
    });
  }

  ngOnInit(): void {
    this.profileFacade.getProfile();
  }

  public onFormSubmit(): void {
    this.profileFacade.saveProfile(this.userForm.value);
  }
}
