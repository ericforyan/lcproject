import React, {useEffect, useState} from 'react';
import rawData from './data/SampleResponse.json';
import Summaries from './Summaries/Summaries.js';
import Industries from './Industries/Industries.js';
import Trends from './Trends/Trends.js';

// eslint-disable-next-line
import styles from './styles.module.css';

function App() {

  const [resData, setResData] = useState(rawData);  

  const loadOccupationData = () => {
    const route = '/occupations';
    var params = { occupation: '15-1131', area_type: 'msa', area_code: '42660' };
    //Lightcast: I would make a request here, get the response, and set into resData
  }

  useEffect( () => {
    loadOccupationData();
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
      <Trends trendData={resData.trend_comparison}/>
      <h2>Industries Employing {resData.occupation.title}</h2>
      <Industries industryData={resData.employing_industries}/>
    </div>
  );
}

export default App;