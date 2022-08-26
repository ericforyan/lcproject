import styles from './styles.module.css';
import SummaryJobs from './SummaryJobs.js';
import SummaryGrowth from './SummaryGrowth.js';
import SummaryEarnings from './SummaryEarnings.js';

function Summaries(props) {

  const {summaryData} = props;

  return (
    <div className={styles.gc}>
        <SummaryJobs jobsSummary={summaryData.jobs}/>
        <SummaryGrowth jobsGrowth={summaryData.jobs_growth}/>
        <SummaryEarnings jobsEarnings={summaryData.earnings}/>
    </div>
  );
}

export default Summaries;