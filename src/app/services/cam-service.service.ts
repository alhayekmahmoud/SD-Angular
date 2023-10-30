import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

@Injectable({
  providedIn: 'root'
})
export class CamServiceService {
  public webcamImage!: WebcamImage;
    private nextWebcam: Subject<any> = new Subject();

    captureImage  = '';

    private trigger: Subject<any> = new Subject();

  constructor() { }


    /*------------------------------------------
    --------------------------------------------
    triggerSnapshot()
    --------------------------------------------
    --------------------------------------------*/
    public triggerSnapshot(): void {
      this.trigger.next(this.nextWebcam);
  }

  /*------------------------------------------
  --------------------------------------------
  handleImage()
  --------------------------------------------
  --------------------------------------------*/
  public handleImage(webcamImage: WebcamImage): void {
      this.webcamImage = webcamImage;
      this.captureImage = webcamImage!.imageAsDataUrl;
      console.info('received webcam image', this.captureImage);
  }

  /*------------------------------------------
  --------------------------------------------
  triggerObservable()
  --------------------------------------------
  --------------------------------------------*/
  public get triggerObservable(): Observable<any> {

      return this.trigger.asObservable();
  }

  /*------------------------------------------
  --------------------------------------------
  nextWebcamObservable()
  --------------------------------------------
  --------------------------------------------*/
  public get nextWebcamObservable(): Observable<any> {

      return this.nextWebcam.asObservable();
  }
}
