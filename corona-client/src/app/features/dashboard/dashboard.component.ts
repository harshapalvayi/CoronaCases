import { Component, OnInit } from '@angular/core';
import {Countries, Global, Summary} from '@models/summaryData';
import {Chart} from '@models/chart';
import {CoronaService} from '@shared/services/corona/corona.service';
import {Observable} from 'rxjs';
import {UtilService} from '@shared/services/util/util.service';
import {FormGroup} from '@angular/forms';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  globalData: Global;
  countries: SelectItem[] = [];
  dashboardData: Chart[] = [];
  countryData: Chart[] = [];
  summaryData: Summary;
  public nationForm: FormGroup;
  public loader$: Observable<boolean> = this.utilService.getLoader();
  constructor(private utilService: UtilService,
              private coronaService: CoronaService) { }

  ngOnInit() {
    this.utilService.showSpinner();
    this.nationForm = this.coronaService.createNationForm();

    this.coronaService.getSummary().subscribe(result => {
      this.globalData = result.global;
      this.summaryData = result;
      this.dashboardData = [
        { name: 'New Confirmed', value: this.globalData.newConfirmed ? this.globalData.newConfirmed : '' },
        { name: 'Total Confirmed', value: this.globalData.totalConfirmed ? this.globalData.totalConfirmed : '' },
        { name: 'New Deaths', value: this.globalData.newDeaths ? this.globalData.newDeaths : '' },
        { name: 'Total Deaths', value: this.globalData.totalDeaths ? this.globalData.totalDeaths : '' },
        { name: 'New Recovered', value: this.globalData.newRecovered ? this.globalData.newRecovered : '' },
        { name: 'Total Recovered', value: this.globalData.totalRecovered  ? this.globalData.totalRecovered : '' },
      ];
      if (result.countries) {
        result.countries.forEach(country => {
          this.countries.push({label: country.country, value: country.country});
        });
      }
      this.utilService.hideSpinner();
    }, () => {
      this.utilService.hideSpinner();
    });
  }

  onSelection() {
    const country = this.nationForm.get('country').value;
    const countryData: Countries = this.summaryData.countries
      .find(data => data.country === country);
    this.countryData = [
        { name: 'New Confirmed', value: countryData.newConfirmed ? countryData.newConfirmed : '' },
        { name: 'Total Confirmed', value: countryData.totalConfirmed ? countryData.totalConfirmed : '' },
        { name: 'New Deaths', value: countryData.newDeaths ? countryData.newDeaths : '' },
        { name: 'Total Deaths', value: countryData.totalDeaths ? countryData.totalDeaths : '' },
        { name: 'New Recovered', value: countryData.newRecovered ? countryData.newRecovered : '' },
        { name: 'Total Recovered', value: countryData.totalRecovered  ? countryData.totalRecovered : '' },
      ];
  }
}
