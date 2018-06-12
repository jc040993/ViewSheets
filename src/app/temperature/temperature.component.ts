import { Component, OnInit } from '@angular/core';
import { GetJsonService } from '../json-to-table.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  dataSet = [];
  displayDataSet = [];
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];

  constructor(private getJson: GetJsonService) { }

  ngOnInit() {
    this.getJson.getJSON('https://sheetsu.com/apis/v1.0bu/2706852f3c9f').subscribe(data => {
      this.displayDataSet = this.dataSet = data;
    });
  }

  onChange(result: Date): void {
    this.displayDataSet = this.dataSet.filter(row => {
      return new Date(row.Timestamp) >= result[0] && new Date(row.Timestamp) <= result[1];
    });
  }

}
