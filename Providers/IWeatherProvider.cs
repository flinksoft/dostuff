using System.Collections.Generic;
using dostuff.Models;

namespace dostuff.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
