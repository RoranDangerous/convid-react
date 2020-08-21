import React from 'react';

import { connect } from 'react-redux';
import { IState } from 'redux/types';

import { Drawer, Typography } from '@material-ui/core';
import useStyles from './styles';
import { Line, Bar } from 'react-chartjs-2';
import Summary from './Summary';
import { historical as historicalData } from 'data';

const mapState = (state: IState) => ({ open: !state.fullScreen, selectedCountry: state.selectedCountry });

type Props = ReturnType<typeof mapState>;

const RightSidebar = (props: Props) => {
  const { open } = props;
  const classes = useStyles(open);

  return (
    <Drawer className={classes.drawer} variant='persistent' anchor='right' open={open}>
      <Content/>
    </Drawer>
  )
};

interface IHistoricalData{
  cases: { [date: string]: number },
  deaths: { [date: string]: number },
  recovered: { [date: string]: number }
}

let prev_cases = 0;
const Content = connect(mapState)((props: Props) => {
  const { selectedCountry } = props;
  const [historical, setHistorical] = React.useState<IHistoricalData>({
    cases: {},
    deaths: {},
    recovered: {}
  });
  const classes = useStyles();

  React.useEffect(() => {
    if(selectedCountry){
      historicalData.fetch_country(selectedCountry).then((v: any) => setHistorical(v.timeline))
    }
    else{
      historicalData.fetch_all().then(setHistorical);
    }
  }, [selectedCountry, setHistorical])

  prev_cases = 0;

  return (
    <div className={classes.content}>
      <Summary/>
      <div className={classes.section}>
        <Typography align='center' className={classes.title}>Daily Cases:</Typography>
        <Bar
          data={{
            labels: Object.keys(historical.cases),
            datasets: [{
              data: Object.values(historical.cases).map((v: number) => {
                let value = v - prev_cases;
                prev_cases = v;
                return value;
              }),
              borderColor: 'red',
              borderWidth: 1,
              fill: false
            }]
          }}
          options={{
            legend: {
              display: false
            },
            tooltips: {
              callbacks: {
                label: (tooltipItem: any) => tooltipItem.yLabel
              }
            }
          }}
        />
      </div>
      <div className={classes.section}>
        <Typography align='center' className={classes.title}>Total Cases:</Typography>
        <Line
          data={{
            labels: Object.keys(historical.cases),
            datasets: [{
              data: Object.values(historical.cases),
              borderColor: 'red',
              borderWidth: 1,
              fill: false,
            }]
          }}
          options={{
            legend: {
              display: false
            },
            tooltips: {
              callbacks: {
                label: (tooltipItem: any) => tooltipItem.yLabel
              }
            }
          }}
        />
      </div>
    </div>
  )
})

export default connect(mapState)(RightSidebar);