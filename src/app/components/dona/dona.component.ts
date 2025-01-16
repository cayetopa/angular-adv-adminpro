import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent  implements OnInit{

  @Input() title: string = "";
  @Input() data: number[] = [100, 100, 100];

  @Input('labels') doughnutChartLabels: string[] = [
    'lavel1',
    'lavel2',
    'lavel3',
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] }
    ],
  };
  
  public doughnutChartType: ChartType = 'doughnut';
  
  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: this.data  
        }
      ]
    }
  }

  
}
