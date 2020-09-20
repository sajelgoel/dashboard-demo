import { AfterViewInit, Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-dashboard-candle',
  templateUrl: './dashboard-candle.component.html',
  styleUrls: ['./dashboard-candle.component.scss']
})
export class DashboardCandleComponent implements OnInit,AfterViewInit {

  @ViewChild('candleChart') candleChartRef: ElementRef;

  chart:any;
  

  title = '';
  type = 'CandlestickChart';
  data = [
     ["id", 20, 28, 38, 45],
     ["1w", 31, 38, 55, 66],
     ["1m", 50, 55, 77, 80],
     ["3m", 77, 77, 66, 50],
     ["6m", 68, 66, 22, 15],
     ["1y", 68, 66, 22, 15],
     ["id", 20, 28, 38, 45],
     ["1w", 31, 38, 55, 66],
     ["1m", 50, 55, 77, 80],
     ["3m", 77, 77, 66, 50],
     ["6m", 68, 66, 22, 15],
     ["1y", 68, 66, 22, 15],
     ["id", 20, 28, 38, 45],
     ["1w", 31, 38, 55, 66],
     ["1m", 50, 55, 77, 80],
     ["3m", 77, 77, 66, 50],
     ["6m", 68, 66, 22, 15],
     ["1y", 68, 66, 22, 15],
     ["id", 20, 28, 38, 45],
     ["1w", 31, 38, 55, 66],
     ["1m", 50, 55, 77, 80],
     ["3m", 77, 77, 66, 50],
     ["6m", 68, 66, 22, 15],
     ["1y", 68, 66, 22, 15],
  ];
  options = {
     legend:'none', 
     bar:{groupWidth:'50%'},
     candlestick: {
       
        fallingColor: { strokeWidth: 2, stroke:'', fill:'red' }, // red
        risingColor: { strokeWidth: 2, stroke: '' }   // green
     }
  };
  width = 350;
  height = 200;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    // this.chart = new Chart(this.candleChartRef.nativeElement, {
    //   type: 'candlestick',
    //   data: {
    //     datasets: [{
    //       label: 'CHRT - Chart.js Corporation',
    //       borderColor: "rgba(90, 90, 90, 1)",
    //       borderWidth: 1,
    //       data: [
    //         {
    //           "t": 1491004800000
    //         },
    //         {
    //           "t": 1491177600000
    //         },
    //         {
    //           "t": 1491264000000
    //         },
    //         {
    //           "t": 1491350400000
    //         },
    //         {
    //           "t": 1491436800000
    //         },
    //         {
    //           "t": 1491523200000
    //         },
    //         {
    //           "t": 1491782400000
    //         },
    //         {
    //           "t": 1491868800000
    //         },
    //         {
    //           "t": 1491955200000
    //         },
    //         {
    //           "t": 1492041600000
    //         },
    //         {
    //           "t": 1492128000000
    //         },
    //         {
    //           "t": 1492387200000
    //         }
    //       ]
    //     }]
    //   },
    //   options:{
    //     // color:{
    //     //   down: "rgba(215, 85, 65, 1)",
    //     //   unchanged: "rgba(90, 90, 90, 1)",
    //     //   up: "rgba(80, 160, 115, 1)"
    //     // }
    //   }
    // });
  }

  
}
