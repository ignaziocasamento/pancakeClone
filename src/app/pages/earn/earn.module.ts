import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EarnTabComponent } from "src/app/shared/earn-tab/earn-tab.component";
import { SharedModule } from "src/app/shared/shared.module";
import { EarnRoutingModule } from "./earn-routing.module";
import { EarnComponent } from "./earn.component";
import { FarmsCollapseComponent } from "./farms/farms-collapse/farms-collapse.component";
import { FarmsComponent } from "./farms/farms.component";
import { PoolCollapseComponent } from "./pools/pool-collapse/pool-collapse.component";
import { PoolsComponent } from "./pools/pools.component";

@NgModule({
    declarations: [
        EarnComponent,
        FarmsCollapseComponent,
        EarnTabComponent,
        PoolsComponent,
        PoolCollapseComponent,
        FarmsComponent,
    ],
    imports: [
        CommonModule,
        NgbModule,
        EarnRoutingModule,
        HttpClientModule,
        SharedModule
    ]
})

export class EarnModule { }