import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Axios from "axios";
import {coindeskClient, restapiexampleClient} from "../../clients";

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

@Component
export default class FetchDataComponent extends Vue {
    forecasts: WeatherForecast[] = [];
    coinDeskData: any;

    mounted() {
        fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json() as Promise<WeatherForecast[]>)
            .then(data => {
                this.forecasts = data;
            });

        coindeskClient.get('bpi/currentprice.json').then(response => {
            console.log(response.data.bpi);
        });

        restapiexampleClient.get('api/v1/employees').then(response => {
            console.log(response.data);
        });
    }
}
