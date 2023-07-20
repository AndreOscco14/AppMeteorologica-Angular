import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // dataFromApi: any;
  datos:any[] = []

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.dataFromApiFast();
  }

  dataFromApiFast(): void {
    this.apiService.getApiData().subscribe((data: any) => {
        this.datos = data;
        console.log("Datos de FastApi",data)
      },
      (error) => {
        console.error('Error al obtener datos de la API:', error);
      }
    );
  }
}

// cargarDatosDesdeApi(): void {
//   // Llama a tu servicio API para obtener los datos desde FastAPI
//   this.apiService.obtenerDatos().subscribe(
//     (response: any[]) => {
//       this.datos = response; // Almacena los datos recibidos en la propiedad 'datos'
//     },
//     (error) => {
//       console.error('Error al obtener los datos de la API:', error);
//     }
//   );
// }
// }