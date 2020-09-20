import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { DashboardHeaderComponent } from './components/main-dashboard/dashboard-header/dashboard-header.component';
import { DashboardBalanceComponent } from './components/main-dashboard/dashboard-balance/dashboard-balance.component';
import { DashboardDoughnutComponent } from './components/main-dashboard/dashboard-doughnut/dashboard-doughnut.component';
import { DashboardLineChartComponent } from './components/main-dashboard/dashboard-line-chart/dashboard-line-chart.component';
import { DashboardCandleComponent } from './components/main-dashboard/dashboard-candle/dashboard-candle.component';
import { DashboardTransactionComponent } from './components/main-dashboard/dashboard-transaction/dashboard-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    NavigationComponent,
    UserInfoComponent,
    DashboardHeaderComponent,
    DashboardBalanceComponent,
    DashboardDoughnutComponent,
    DashboardLineChartComponent,
    DashboardCandleComponent,
    DashboardTransactionComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
