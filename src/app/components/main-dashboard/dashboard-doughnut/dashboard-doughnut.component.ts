import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-doughnut',
  templateUrl: './dashboard-doughnut.component.html',
  styleUrls: ['./dashboard-doughnut.component.scss']
})
export class DashboardDoughnutComponent implements OnInit {

  doughnutChart:any;

  doughnutChartObject = {
    type: 'doughnut',
    data: {
      labels: ["Bitcoin", "Ethereum", "Monero"],
      datasets: [{
        //  label: '# of Votes',
        data: [11567, 5583, 8050.97],
        backgroundColor: [
          'rgba(54, 162, 235, 1)',
          'rgb(108,117,125,1)',
          'rgb(248,249,250,1)'
        ]
        //  borderColor: [
        //      'rgba(255,99,132,1)',
        //      'rgba(54, 162, 235, 1)',
        //      'rgba(255, 206, 86, 1)'
        //  ],
        // borderWidth: 1
      }]
    },
    options: {
      cutoutPercentage: 70,
      legend: {
        display: false
      }
      //  title:{
      //      text:"Bar Chart",
      //      display:true
      //  },
      //  scales: {
      //      yAxes: [{
      //          ticks: {
      //              beginAtZero:true
      //          }
      //      }]
      //  }
    }
  }

  constructor() { }

  ngOnInit(): void {

    // pie chart:
    this.doughnutChart = new Chart('doughnutChart', this.doughnutChartObject);

  }

}
