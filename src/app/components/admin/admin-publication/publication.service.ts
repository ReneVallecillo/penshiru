import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../../../config/app.config';


@Injectable()
export class PublicationService {

  constructor( @Inject(APP_CONFIG) private config: IAppConfig) { }

}
