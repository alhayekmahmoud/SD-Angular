import { Component, OnInit } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { CamServiceService } from './services/cam-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SD-Angular';
  constructor(public camService: CamServiceService){}



    ngOnInit() {}

}
