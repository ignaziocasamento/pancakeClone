import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ConnectWalletComponent } from './core/connect-wallet/connect-wallet.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { EarnPassiveIncomeComponent } from './pages/home/earn-passive-income/earn-passive-income.component';
import { TradeAnythingComponent } from './pages/home/trade-anything/trade-anything.component';
import { WinMillionsComponent } from './pages/home/win-millions/win-millions.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home/home.component';
import { CakeComponent } from './pages/home/cake/cake.component';
import { StartInSecondsComponent } from './pages/home/start-in-seconds/start-in-seconds.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsedByMillionsComponent } from './pages/home/used-by-millions/used-by-millions.component';
import { LoginComponent } from './core/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConnectWalletComponent,
    HeroComponent,
    EarnPassiveIncomeComponent,
    TradeAnythingComponent,
    WinMillionsComponent,
    HomeComponent,
    CakeComponent,
    StartInSecondsComponent,
    UsedByMillionsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
