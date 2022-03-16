import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { CollectionsComponent } from './collections/collections.component';
import { NftsComponent } from './nfts.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: NftsComponent,
    children: [
      { path: 'collections', component: CollectionsComponent },
      { path: 'activity', component: ActivityComponent },
      { path: '', component: OverviewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NftsRoutingModule { }