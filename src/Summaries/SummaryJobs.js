import styles from './styles.module.css';

function SummaryJobs(props) {

  const {jobsSummary} = props;

  const deltaStr = () => {
    const delta = Math.round(((jobsSummary.regional - jobsSummary.national_avg)/jobsSummary.national_avg) * 100);
    const deltaPct = delta !== 0 ? Math.abs(delta) + '%' : '';
    let compareStyle = {};
    let compareStr = '';

    if( delta > 0 ) {
      compareStyle={color: 'green'}
      compareStr = 'above';
    }
    else if( delta < 0 ) {
      compareStyle={color: 'red'}
      compareStr = 'below'
    }
    else {
      compareStr = 'Equal to';
    }

    return <p>{deltaPct} <span style={compareStyle}>{compareStr}</span> National average</p>
  }

  return (
    <div className={styles.box}>
      <h1>{jobsSummary.regional}</h1>
      <h2>Jobs ({jobsSummary.year})</h2>
      {deltaStr()}
    </div>
  );
}

export default SummaryJobs;