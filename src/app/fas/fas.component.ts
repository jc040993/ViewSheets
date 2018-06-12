import { Component, OnInit } from '@angular/core';
import { GetJsonService } from '../json-to-table.service';

@Component({
  selector: 'app-fas',
  templateUrl: './fas.component.html',
  styleUrls: ['./fas.component.css']
})
export class FasComponent implements OnInit {

  dataSet = [];
  displayDataSet = [];

  constructor(private getJson: GetJsonService) { }

  ngOnInit() {
    this.getJson.getJSON('https://sheetsu.com/apis/v1.0bu/22271a4f26c1').subscribe(data => {
      this.displayDataSet = this.dataSet = data;
    });
  }

  onChange(result: Date): void {
    this.displayDataSet = this.dataSet.filter(row => {
      return new Date(row.Timestamp) >= result[0] && new Date(row.Timestamp) <= result[1];
    });
  }
  
}
