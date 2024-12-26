import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('pieChart', { static: true }) pieChart!: ElementRef;
  data: any = [];
  dashboardData: any = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataService.sendData().subscribe(
      (response) => {
        this.data = response;
        console.log('Fetched data:', this.data);

        this.renderPieChart();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


  renderPieChart() {
    const chartInstance = echarts.init(this.pieChart.nativeElement);

    const hardcodedData = [
      { name: 'Milk Tea', value: 86.5 },
      { name: 'Matcha Latte', value: 41.1 },
      { name: 'Cheese Cocoa', value: 24.1 },
      { name: 'Walnut Brownie', value: 55.2 }
    ];

    const options = {
      title: {
        text: 'Pie Chart with Hardcoded Data',
        subtext: 'Example Data Visualization',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Data',
          type: 'pie',
          radius: '50%',
          data: hardcodedData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    chartInstance.setOption(options);
  }
}
