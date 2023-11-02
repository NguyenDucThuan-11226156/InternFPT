import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather(cityName: string) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb0c9e22e03abc35042b687929c1f719`;
    return this.http.get(apiUrl);
  }
}
