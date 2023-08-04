import React, { useState, useEffect } from 'react';

// I didnt have time to complete the forecast length logic so its just there
const CallApi = ({cityStr, lenStr}) => {
  const [data, setData] = useState(null);
  const [submitToken, setSubmitToken] = useState(null);

  const apiEndpoints = ["", "/weather/now?city=", "/weather/sevenDay?city="];

  const doApiCall = () => {
    setSubmitToken(submitToken+1);
  };
  
  useEffect(() => {
      if(cityStr!='0' && lenStr!='0') {
        fetch(apiEndpoints[parseInt(lenStr)]+cityStr)
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
  }}, [submitToken]);
  
  return (
    <div>
      <p/>
          <div>
            <button onClick={doApiCall}>Search</button>
          </div>
      <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : ''}
      </div>
    </div>
  );
}

export default CallApi;