import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExchangeComponent } from "./exchange/exchange.component";
import { AddSectionComponent } from "./liquidity/add-section/add-section.component";
import { LiquidityComponent } from "./liquidity/liquidity.component";
import { TradeComponent } from "./trade/trade.component";

const routes: Routes = [
    {
        path: '',
        component: TradeComponent,
        children: [
          { path: 'exchange', component: ExchangeComponent },
          { path: 'liquidity', component: LiquidityComponent },
          { path: 'add', component: AddSectionComponent }
        ]
      }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TradeRoutingModule {  }