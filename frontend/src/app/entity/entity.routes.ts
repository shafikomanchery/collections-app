import { Routes } from "@angular/router";
import { EntityComponent } from "./components/entity/entity.component";
import { CreateEntityComponent } from "./components/create-entity/create-entity.component";
import { ViewEntityComponent } from "./components/view-entity/view-entity.component";
import { ViewAccountComponent } from "../accounts/components/view-account/view-account.component";
import { ListEntityComponent } from "./components/list-entity/list-entity.component";
import { PaymentsComponent } from "../accounts/components/payments/payments.component";

export const EntityRoutes: Routes = [{
   path: '',
   component: EntityComponent,
   children:[
    {
        path: 'list',
        component: ListEntityComponent

    },
    {
        path:'create',
        component: CreateEntityComponent
    },
    {
        path:'view/:id',
        component: ViewEntityComponent
    },
    {
        path:'view/:id/account/:id',
        component: ViewAccountComponent
    },
    {
        path:'view/:id/account/:id/payments',
        component: PaymentsComponent
    },
    {
        path:'**',
        redirectTo: 'list',
        pathMatch: 'full'
    }
   ]
}]