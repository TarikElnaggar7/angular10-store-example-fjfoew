import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FlowersComponent } from "./flowers/flowers.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: "", redirectTo: "/flowers", pathMatch: "full" },
  { path: "flowers", component: FlowersComponent },
  { path: "profile", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
