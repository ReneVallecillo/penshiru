import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export class Config {
    apiEndpoint: string;
}

export const AppConfig: Config = {
    apiEndpoint: 'http://localhost:8080/api/'
};

