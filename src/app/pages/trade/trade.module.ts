import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { NgxPaginationModule } from "ngx-pagination";
import { LineChartComponent } from "src/app/shared/chart/line-chart/line-chart.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ExchangeComponent } from "./exchange/exchange.component";
import { AddSectionComponent } from "./liquidity/add-section/add-section.component";
import { LiquidityComponent } from "./liquidity/liquidity.component";
import { TradeRoutingModule } from "./trade-routing.module";
import { TradeComponent } from "./trade/trade.component";

@NgModule({
    declarations: [
        LineChartComponent,
        TradeComponent,
        ExchangeComponent,
        LiquidityComponent,
        AddSectionComponent
    ],
    imports: [
        NgbModule,
        HttpClientModule,
        ChartsModule,
        NgxPaginationModule,
        CommonModule,
        TradeRoutingModule,
        SharedModule
    ],
    exports: [
        LineChartComponent
    ]
})

export class TradeModule { }