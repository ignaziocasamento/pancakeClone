import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TradeRoutingModule } from "../pages/trade/trade-routing.module";
import { SwitchTabComponent } from "./switch-tab/switch-tab.component";

@NgModule({
    declarations: [
        SwitchTabComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        TradeRoutingModule
    ],
    exports: [
        SwitchTabComponent
    ]
})

export class SharedModule {  }