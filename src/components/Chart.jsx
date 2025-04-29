import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const Chart = ({budgets}) => {
    const [state, setState] = useState({
        series: budgets.map((m)=>m.maximum),
        options: {
          chart: {
            type: 'donut',
          },
          labels : budgets.map((c)=> c.category),
          chart :{
            width: 100
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 100
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
    });

    

    return (
      <div style = {{width: "400px"}}>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="donut" />
          </div>
        <div id="html-dist"></div>
      </div>
    );
}