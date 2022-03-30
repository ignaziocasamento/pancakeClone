import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { NgxPaginationModule } from "ngx-pagination";
import { LineChartComponent } from "src/app/shared/chart/line-chart/line-chart.component";
import { SwapComponent } from "src/app/shared/swap/swap.component";
import { ExchangeComponent } from "./exchange/exchange.component";
import { AddSectionComponent } from "./liquidity/add-section/add-section.component";
import { LiquidityComponent } from "./liquidity/liquidity.component";
import { TradeRoutingModule } from "./trade-routing.module";
import { TradeComponent } from "./trade/trade.component";

@NgModule({
    declarations: [
        LineChartComponent,
        SwapComponent,
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
        TradeRoutingModule
    ]
})

export class TradeModule { }