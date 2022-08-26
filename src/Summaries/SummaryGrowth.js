import styles from './styles.module.css';

function SummaryGrowth(props) {

  const {jobsGrowth} = props;

  const renderPercent = (val, isHeader) => {
    let growthStyle = {};
    let prefix = '+';

    if( val > 0 ) {
      growthStyle={color: 'green'}
    }
    else if( val < 0 ) {
      prefix = '';
      growthStyle={color: 'red'}
    }

    if( isHeader === true ) {
      return <h1 style={growthStyle}>{prefix}{val}%</h1>  
    }
    else {
      return <span style={growthStyle}>{prefix}{val}%</span>
    }
  }


  return (
    <div className={styles.box}>
      {renderPercent(jobsGrowth.regional, true)}
      <h2>% Change ({jobsGrowth.start_year}-{jobsGrowth.end_year})</h2>
      Nation: {renderPercent(jobsGrowth.national_avg, false)}
    </div>
  );
}

export default SummaryGrowth;