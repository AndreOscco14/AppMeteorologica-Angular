import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  datos:any[] = []
  datosLogMetar:any;
  datosLogRvr: any;
  p:number = 1 //Iniciación de la paginción

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
      console.log("Data Metar", datos);
    } catch (error) {
      console.log(error);
    }
 }
 
  dataFromRvr() {
    try {
      this.apiService.getLogRvr().subscribe((data: any) => {
        this.datosLogRvr = data;
        console.log("RVR:", data)
      })
    } catch (error) {
      console.log(error);
    }
  }

    // Función para convertir timestamp a hora legible
    formatTimestampToTime(timestamp: number): string {
      const date = new Date(timestamp * 1000);
      return date.toLocaleTimeString(); // Cambia el formato de hora si es necesario
    }

   // Función para convertir timestamp a hora y fecha legible
      formatTimestampToDateTime(timestamp: number): string {
        const date = new Date(timestamp * 1000);
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        };
        return date.toLocaleString(undefined, options);
      }
}
