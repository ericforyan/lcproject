import styles from './styles.module.css';

function SummaryEarnings(props) {

  const {jobsEarnings} = props;

  return (
    <div className={styles.box}>
      <h1>{jobsEarnings.regional}/hr</h1>
      <h2>Median Hourly Earnings</h2>
      Nation: ${jobsEarnings.national_avg}/hr
    </div>
  );
}

export default SummaryEarnings;