import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private app: AppService){}

  data: any = {falla: 'falla',
          automovil: null,
          nuevo: null,
          automatico: null,
          manejar: null,
          aprender: null,
          modoestandar: null,
          manejarestandar: null,
          mantenimiento: null,
          estabilizadores: null,
          combustible: null,
          sonido: null,
          pilotos: null,
          meteorologia: null
    };

  ngOnInit(){
    console.log(this.data);
  }

  setParam(param: any, value: any){
    this.data[param] = value;
    console.log(this.data);
    this.app.testData(this.data).subscribe(
      (data: any) =>{
        console.log(data);
      },
      (error: any) =>{
        console.log(error);
      }
    )
  }

}
