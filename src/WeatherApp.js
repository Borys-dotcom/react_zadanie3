import { useState, useEffect } from 'react';
import './WeatherApp.css';
import axios from 'axios';
import SingleCityData from './SingleCityData';
import SearchForm from './SearchForm';

const WeatherApp = () => {

    const [weatherData, setWeatherData] = useState([]);
    const [weatherDataToDisplay, setWeatherDataToDisplay] = useState([]);

    const getDataFromServer = () => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop').then((response) => {
            setWeatherData(response.data);
            setWeatherDataToDisplay(response.data);
        });
    }

    const searchFunction = (event) => {
        let inputString = event.target.value;
        return setWeatherDataToDisplay(() => {
            return (weatherData.filter((weatherDataForCity)=>weatherDataForCity.stacja.toLowerCase().includes(inputString.toLowerCase())));
        })
    }

    useEffect(() => {
        getDataFromServer(weatherData);
    }, []);

    return (
        <div>
            <h1 className='mainHeader'>Dane pogodowe</h1>
            <SearchForm searchFunction={searchFunction}/>
            <div className="allCitiesData">
                {weatherDataToDisplay.map((cityWeatherData) => {
                    return (
                        <SingleCityData cityWeatherData={cityWeatherData} key={cityWeatherData.id_stacji}/>
                    )
                })}
            </div>
        </div>
    );
}

export default WeatherApp