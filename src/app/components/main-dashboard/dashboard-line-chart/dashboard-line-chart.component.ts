import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-dashboard-line-chart',
  templateUrl: './dashboard-line-chart.component.html',
  styleUrls: ['./dashboard-line-chart.component.scss']
})
export class DashboardLineChartComponent implements OnInit,AfterViewInit {

  @ViewChild('lineChart') lineChartRef: ElementRef;
  
  LineChart: any;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){

    this.LineChart = new Chart(this.lineChartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        datasets: [
          {
            label: 'Data 2',
            data: [10, 4, 12, 8, 4, 7, 10, 5],
            fill: 'origin',
            lineTension: 0,
            borderColor: "rgb(108,117,125,1)",
            borderWidth: 1,
            pointBorderWidth: 4,
            pointBackgroundColor: 'rgba(255,255,255, 0.9)',
            pointRadius: 0
          }, {
            label: 'Data 1',
            data: [16, 8, 20, 14, 8, 14, 20, 10],
            fill: 'origin',
            lineTension: 0,
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            pointBorderColor: 'rgba(54, 162, 235, 1)',
            pointBorderWidth: 4,
            pointBackgroundColor: 'rgba(255,255,255, 0.9)',
            pointRadius: 5,
          }
        ]
      },
      options: {
        //  title:{
        //      text:"Line Chart",
        //      display:true
        //  },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            display: false,
            stacked: true
          }]
        },
      }
    });
    
  }



}
