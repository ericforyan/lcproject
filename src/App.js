import React, {useEffect, useState} from 'react';
import rawData from './data/SampleResponse.json';
import Summaries from './Summaries/Summaries.js';
import TrendChart from './Trends/TrendChart.js';
import TrendTab from './Trends/TrendTab.js';
import Industries from './Industries/Industries.js';

// eslint-disable-next-line
import styles from './styles.module.css';

function App() {

  const [resData, setResData] = useState(rawData);  

  useEffect( () => {
    // Would load data here
  }, []);

  return (
    <div className="App">
      <h1>
        Occupation Overview
      </h1>
      <p>{resData.occupation.title} in {resData.region.title}</p>
      <h2 className={styles.noBorder}>Occupation Summary for {resData.occupation.title}</h2>
      <Summaries summaryData={resData.summary}/>
      <h2>Regional Trends</h2>
      <TrendChart trendData={resData.trend_comparison}/>
      <TrendTab trendData={resData.trend_comparison}/>
      <h2>Industries Employing {resData.occupation.title}</h2>
      <Industries industryData={resData.employing_industries}/>
    </div>
  );
}

export default App;