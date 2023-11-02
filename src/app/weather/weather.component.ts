import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService],
})

export class WeatherComponent implements OnInit {
  currentTime: string='';
  constructor(private weatherService: WeatherService) {}
  countryNG: string = '';
  country: string = '';
  temp: number = 0;
  email ='';
  password ='';
  ngOnInit() {
    // Create an observable that emits a value every second (1000 milliseconds)
    const timeObservable = interval(1000);
    // Subscribe to the observable to update the time
    timeObservable.subscribe(() => {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString(); // Format the time as desired
    });
  }
  handle(event: KeyboardEvent) {

    if (event.key === 'Enter') {
      this.weatherService.getWeather(this.countryNG).subscribe(
        (data: any) => {
          this.country = this.countryNG;
          this.temp = Math.round(data.main.temp - 273);
        },
        (error:any) => {
          console.error(error);
        }
      );
    }
  }
  submit(form:any)
  {
    console.log(form)
  }
  // currentDate = new Date();
  // year = this.currentDate.getFullYear();
  // month = this.currentDate.getMonth(); // 0 for January, 11 for December
  // day = this.currentDate.getDate();
  // hours = this.currentDate.getHours();
  // minutes = this.currentDate.getMinutes();
  // seconds = this.currentDate.getSeconds();
}
