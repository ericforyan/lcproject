import styles from './styles.module.css';

function TrendTab(props) {

  const {trendData} = props;

  function calcPercentChange(old, curr) {
    return Math.round(((curr - old)/old) * 1000) / 10;
  }

  const buildDeltaStr = (a,b) => {
    return (a - b).toLocaleString("en-US");
  }
 
  return(   
    <div>
      <table width='100%'>
        <tr>
          <th width='2%'></th>
          <th className={styles.left} >Region</th>
          <th className={styles.right} width='12%' >{trendData.start_year} Jobs</th>
          <th className={styles.right} width='12%' >{trendData.end_year} Jobs</th>
          <th className={styles.right} width='12%' >Change</th>
          <th className={styles.right} width='12%' >% Change</th>
        </tr>
        <tr>
          <td>
            <svg width={16} height={16} fill={'#142850'} class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>
          </td>
          <td className={styles.left}>Region</td>
          <td className={styles.right}>{trendData.regional[0].toLocaleString("en-US")}</td>
          <td className={styles.right}>{trendData.regional.at(-1).toLocaleString("en-US")}</td>
          <td className={styles.right}>{buildDeltaStr(trendData.regional.at(-1), trendData.regional[0])}</td>
          <td className={styles.right}>{calcPercentChange(trendData.regional.at(-1), trendData.regional[0])}%</td>
        </tr>
        <tr>
          <td>
            <svg width={16} height={16} fill={'#1185c4'} class="bi bi-triangle-fill" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
            </svg>
          </td>
          <td className={styles.left}>State</td>
          <td className={styles.right}>{trendData.state[0].toLocaleString("en-US")}</td>
          <td className={styles.right}>{trendData.state.at(-1).toLocaleString("en-US")}</td>
          <td className={styles.right}>{buildDeltaStr(trendData.state.at(-1), trendData.state[0])}</td>
          <td className={styles.right}>{calcPercentChange(trendData.state.at(-1), trendData.state[0])}%</td>
        </tr>       
        <tr>
          <td>
            <svg width={16} height={16} fill={'#acdcfc'} class="bi bi-triangle-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
            </svg>
          </td>
          <td className={styles.left}>Nation</td>
          <td className={styles.right}>{trendData.nation[0].toLocaleString("en-US")}</td>
          <td className={styles.right}>{trendData.state.at(-1).toLocaleString("en-US")}</td>
          <td className={styles.right}>{buildDeltaStr(trendData.nation.at(-1), trendData.nation[0])}</td>
          <td className={styles.right}>{calcPercentChange(trendData.nation.at(-1), trendData.nation[0])}%</td>
        </tr>    
      </table>
    </div>
  );
}

export default TrendTab;