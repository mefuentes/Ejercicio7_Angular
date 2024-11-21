import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Para directivas como *ngIf y *ngFor
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, // Indica que es un componente independiente
  imports: [CommonModule, HttpClientModule], // Aquí se importan los módulos necesarios
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts: any[] = []; // Variable para almacenar los datos

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data) => {
        this.posts = data as any[];
        console.log('Datos obtenidos:', this.posts); // Depuración
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}
