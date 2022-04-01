import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nfts',
    loadChildren: () => import('../app/pages/nfts/nfts.module').then(m => m.NftsModule)
  },
  {
    path: 'earn',
    loadChildren: () => import('../app/pages/earn/earn.module').then(m => m.EarnModule)
  },
  {
    path: 'trade',
    loadChildren: () => import('../app/pages/trade/trade.module').then(m => m.TradeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
