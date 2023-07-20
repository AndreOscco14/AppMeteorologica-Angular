import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  datos:any[] = []
  datosLogMetar:any;
  datosLogRvr: any;
  p:number = 1
  
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(){
    this.getData();
  }

  async getData() {
    try {
      await this.dataFromApiFast();
      await this.dataFromLogMetar();
      await this.dataFromRvr();
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  async dataFromApiFast() {
    try {
      const data: any = await this.apiService.getApiData().toPromise();
      this.datos = data;
      console.log("Datos de FastApi", data);
    } catch (error) {
        console.log(error);
    }
  }  

  async dataFromLogMetar() {
    try {
      const datos: any = await this.apiService.getLogMetar().toPromise();
      this.datosLogMetar = datos;
      console.log(datos);
    } catch (error) {
      console.log(error);
    }
  }
 
  async dataFromRvr() {
    try {
      const data: any = await this.apiService.getLogRvr().toPromise();
      this.datosLogRvr = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}

//   dataFromApiFast(): void {
//     this.apiService.getApiData().subscribe((data: any) => {
//         this.datos = data;
//         console.log("Datos de FastApi",data)
//       },
//       (error) => {
//         console.error('Error al obtener datos de la API:', error);
//       }
//     );
//   }  

//   dataFromLogMetar(): void{
//     this.apiService.getLogMetar().subscribe((datos:any) => {
//       this.datosLogMetar = datos;
//       console.log(datos)
//     }, (error) => {
//       console.error('Error con DataFromLogMetar: ', error)
//     })
//   }
 
//   dataFromRvr() {
//     this.apiService.getLogRvr().subscribe((data:any) => {
//       this.datosLogRvr = data;
//       console.log(data)
//     })
//   }
// }
