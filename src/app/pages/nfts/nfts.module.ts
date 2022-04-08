import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivityComponent } from './activity/activity.component';
import { CollectionsComponent } from './collections/collections.component';
import { OverviewComponent } from './overview/overview.component';
import { NftsComponent } from './nfts.component';
import { FaqsComponent } from './overview/faqs/faqs.component';
import { HotCollectionsComponent } from './overview/hot-collections/hot-collections.component';
import { NewestArrivalsComponent } from './overview/newest-arrivals/newest-arrivals.component';
import { NewestCollectionsComponent } from './overview/newest-collections/newest-collections.component';
import { NftsRoutingModule } from './nfts-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'src/app/shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { UploadComponent } from './upload/upload.component';



@NgModule({
  declarations: [
    ActivityComponent,
    CollectionsComponent,
    OverviewComponent,
    NftsComponent,
    FaqsComponent,
    HotCollectionsComponent,
    NewestArrivalsComponent,
    NewestCollectionsComponent,
    FilterPipe,
    UploadComponent
  ],
  imports: [
    CommonModule,
    NftsRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class NftsModule { }
