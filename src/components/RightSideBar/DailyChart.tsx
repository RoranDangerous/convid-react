import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
defaults.global.line = {
  borderColor: 'aqua'
};

const DailyChart = () => {
  return (
    <Line
      data={{
        labels: ['a', 'b', 'c'],
        datasets: [{
          label: 'My Data',
          data: [10, 20, 30],
          borderColor: 'red',
          borderWidth: 2
        }]
      }}
      // width={100}
      // height={25}
      // options={{ maintainAspectRatio: false }}
    />
  )
}

export default DailyChart;