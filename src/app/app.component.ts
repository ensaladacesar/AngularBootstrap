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
          automovil: 'n',
          nuevo: 'n',
          automatico: 'n',
          manejar: 'n',
          aprender: 'n',
          modoestandar: 'n',
          manejarestandar: 'n',
          mantenimiento: 'n',
          estabilizadores: 'n',
          combustible: 'n',
          sonido: 'n',
          pilotos: 'n',
          meteorologia: 'n'
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
