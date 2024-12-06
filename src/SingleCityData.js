import './SingleCityData.css'

const SingleCityData = (props) => {

    return (
        <div className='singleCityData'>
            <h2>{props.cityWeatherData.stacja}</h2>
            <p>Temperatura: {props.cityWeatherData.temperatura} st.C.</p>
            <p>{props.cityWeatherData.cisnienie !== null ? 'Ciśnienie: ' + props.cityWeatherData.cisnienie + ' hPa' : 'Brak danych'}</p>
            {/* <p>Ciśnienie: {props.cityWeatherData.cisnienie} st.C.</p> */}
        </div>
    );
}

export default SingleCityData