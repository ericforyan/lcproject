import { LineChart, Text, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './styles.module.css';

function TrendChart(props) {

  const {trendData} = props;  

  function buildTrendData(rawTrend) {
    let arrLength = rawTrend.end_year - rawTrend.start_year + 1;
    let currYear = rawTrend.start_year;
    let fullSet = [];
    for(let x=0;x<arrLength-1;++x) {
      let thisPoint = {};
      thisPoint.name = ++currYear;
      if( rawTrend.regional[x] && rawTrend.regional[x+1]) {thisPoint.regional = calcPercentChange(rawTrend.regional[x], rawTrend.regional[x+1]) };
      if( rawTrend.state[x] && rawTrend.regional[x+1]) {thisPoint.state = calcPercentChange(rawTrend.state[x], rawTrend.state[x+1]) };
      if( rawTrend.nation[x] && rawTrend.regional[x+1]) { thisPoint.nation = calcPercentChange(rawTrend.nation[x], rawTrend.nation[x+1]) };
      fullSet.push(thisPoint);
    }
    return fullSet;
  }

  const CustomizedDot = (props) => {
    const { cx, cy, stroke, payload, value, iconType } = props;
    const size = 8;

    if( iconType === 'nation') {
      return (
        <svg x={cx-(size/2)} y={cy-(size/2)} width={size} height={size} fill={stroke} class="bi bi-triangle-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
        </svg>
      );
    }
    else if (iconType === 'state') {
      return (
        <svg x={cx-(size/2)} y={cy-(size/2)} width={size} height={size} fill={stroke} class="bi bi-triangle-fill" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
        </svg>
      );
    }
    else if (iconType ==='regional') {
      return (
        <svg x={cx-(size/2)} y={cy-(size/2)} width={size} height={size} fill={stroke} class="bi bi-circle-fill" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8"/>
        </svg>
      )
    }
  };  

  function calcPercentChange(old, curr) {
    return Math.round(((curr - old)/old) * 1000) / 10;
  }

  var lastSet = buildTrendData(trendData);

  const yAxisLabel = ({ kapi, metric, viewBox }) => {
    return (
        <Text
            x={-100}
            y={0}
            dx={-300}
            dy={40}
            textAnchor="start"
            width={180}
            transform="rotate(-90)"
        >            
            Percent Change
        </Text>
    );
};  

  return(   
    <div className={styles.rc}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={lastSet} >
          <CartesianGrid horizontal={false}  />
          <XAxis dataKey="name" axisLine={false} />
          <YAxis label={yAxisLabel} axisLine={false} />
          <Line dataKey="regional" stroke="#142850" dot={<CustomizedDot stroke="#142850" iconType="regional"/>} activeDot={{ r: 8 }} />
          <Line dataKey="nation"   stroke="#acdcfc" dot={<CustomizedDot stroke="#acdcfc" iconType="nation"/>} activeDot={{ r: 8 }} />
          <Line dataKey="state"    stroke="#1185c4" dot={<CustomizedDot stroke="#1185c4" iconType="state"/>} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrendChart;