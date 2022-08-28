import TrendChart from './TrendChart.js';
import TrendTab from './TrendTab.js';

function Trends(props) {

  const {trendData} = props;

  const dataValidated = () => {
    let validated = true;
    if( trendData.regional.length !== ((trendData.end_year - trendData.start_year)+1) ) { validated = false; }
    if( trendData.state.length !== ((trendData.end_year - trendData.start_year)+1) ) { validated = false; }    
    if( trendData.nation.length !== ((trendData.end_year - trendData.start_year)+1) ) { validated = false; }
    return validated;
  }  

  if( dataValidated() == false ) {
    return (<div>Trend data is not available at the moment.</div>);
  }
  else return(
    <div>
      <TrendChart trendData={trendData}/>
      <TrendTab trendData={trendData}/>      
    </div>
  );
}

export default Trends;