import React from 'react';

function  GetCity(props) {

  return (
        <div>
          <div>
            <label htmlFor="name">City </label>
            <input type="text" id="city" onBlur={(ev)=>props.changeCity(ev.target.value)}/>
          </div>
          <p/>
          <div>
            <label htmlFor="name">Forecast Length </label>
            <select id="forecastLen" onChange={(ev)=>props.changeLen(ev.target.value)}>
              <option value="0" selected disabled hidden>Make a selection</option>
              <option value="1">Today</option>
              <option value="2">7 Day</option>
            </select>
          </div>
        </div>
  );
};

export default GetCity;
