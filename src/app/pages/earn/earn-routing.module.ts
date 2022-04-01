import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EarnComponent } from "./earn.component";
import { FarmsComponent } from "./farms/farms.component";
import { PoolsComponent } from "./pools/pools.component";

const routes: Routes = [
    {
      path: '',
      component: EarnComponent,
      children: [
        { path: 'farms', component: FarmsComponent },
        { path: 'pools', component: PoolsComponent }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EarnRoutingModule { }