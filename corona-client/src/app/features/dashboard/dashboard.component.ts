import { Component, OnInit } from '@angular/core';
import {Global} from '@models/summaryData';
import {Chart} from '@models/chart';
import {CoronaService} from '@shared/services/corona/corona.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  globalData: Global;
  dashboardData: Chart[] = [];

  constructor(private coronaService: CoronaService) { }

  ngOnInit() {
    this.coronaService.getSummary().subscribe(result => {
      this.globalData = result.global;
      this.dashboardData = [
        { name: 'New Confirmed', value: this.globalData.newConfirmed ? this.globalData.newConfirmed : '' },
        { name: 'Total Confirmed', value: this.globalData.totalConfirmed ? this.globalData.totalConfirmed : '' },
        { name: 'New Deaths', value: this.globalData.newDeaths ? this.globalData.newDeaths : '' },
        { name: 'Total Deaths', value: this.globalData.totalDeaths ? this.globalData.totalDeaths : '' },
        { name: 'New Recovered', value: this.globalData.newRecovered ? this.globalData.newRecovered : '' },
        { name: 'Total Recovered', value: this.globalData.totalRecovered  ? this.globalData.totalRecovered : '' },
      ];
    });
  }

}
