import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EntityRoutes } from "./entity.routes";

@NgModule({
    imports: [RouterModule.forChild(EntityRoutes)], 
    exports: [RouterModule]
})
export class EntityRoutingModule {

}