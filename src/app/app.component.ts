import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
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
