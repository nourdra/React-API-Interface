import React, {useState} from "react";
import GetCityPage from './GetCity';
import CallApi from './CallApi'

const MainPage = () => {
    const [city, setCity] = useState(0)
    const [forecastLen, setLen] = useState(0)

    return (
        <div>
            <GetCityPage
                changeCity={city=> setCity(city)}
                changeLen={forecastLen=> setLen(forecastLen)}/>
            <CallApi cityStr={city} lenStr={forecastLen}/>
        </div>
    );
};

export default MainPage;