import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityRoutingModule } from './entity-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEntityComponent } from './components/create-entity/create-entity.component';
import { AccountsModule } from "../accounts/accounts.module";
import { EntityComponent } from './components/entity/entity.component';
import { ViewEntityComponent } from './components/view-entity/view-entity.component';
import { ListEntityComponent } from './components/list-entity/list-entity.component';

@NgModule({
  imports: [
    CommonModule,
    EntityRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AccountsModule
],
  declarations: [EntityComponent,CreateEntityComponent,ViewEntityComponent,ListEntityComponent]
})
export class EntityModule { }
