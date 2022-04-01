import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'psclone-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    { data: [50.96, 50.75, 50.73, 50.84, 50.88, 50.99, 51.11] },
  ];

  lineChartLabels: Label[] = ['10:00 PM', '01:00 AM', '04:00 AM', '08:00 AM', '11:00 AM', '02:00 PM'];

  lineChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          display: true
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#31D0AA',
      backgroundColor: '#CAF5EF',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';



  constructor() { }

  ngOnInit(): void {
  }

}
