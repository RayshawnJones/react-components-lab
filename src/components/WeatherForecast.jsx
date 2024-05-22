
import './WeatherForecast.css'; // Ensure the CSS is imported

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather">
      <h2>{forecast.day}</h2>
      <img src={forecast.img} alt={forecast.imgAlt} />
      <p><span>Conditions: </span>{forecast.conditions}</p>
      <p><span>Time: </span>{forecast.time}</p>
    </div>
  );
}

export default WeatherForecast;
