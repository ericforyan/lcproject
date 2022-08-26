import React, {useEffect, useState} from 'react';
import rawData from './data/SampleResponse.json';
import Summaries from './Summaries/Summaries.js';

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
      <div>
        Trend Chart<br/>
        Trend Tabulation data
      </div>
      <h2>Industries Employing {resData.occupation.title}</h2>
      <div>
        Industry Tabulation
      </div>
    </div>
  );
}

export default App;