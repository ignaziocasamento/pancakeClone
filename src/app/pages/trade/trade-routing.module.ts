import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SwapComponent } from "src/app/shared/swap/swap.component";
import { LiquidityComponent } from "./liquidity/liquidity.component";

const routes: Routes = [
    {
        path: '',
        component: SwapComponent,
        children: [
          { path: 'swap', component: SwapComponent },
          { path: 'liquidity', component: LiquidityComponent },
        ]
      }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TradeRoutingModule {  }