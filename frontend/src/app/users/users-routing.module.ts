import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./users.routes";

@NgModule({
    imports:[RouterModule.forChild(userRoutes)],
    exports:[RouterModule]
})
export class UsersRoutingModule {

}