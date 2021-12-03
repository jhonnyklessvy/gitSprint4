import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-a',
  templateUrl: './consultar-a.component.html',
  styleUrls: ['./consultar-a.component.css']
})
export class ConsultarAComponent implements OnInit {
  
  
  inc: any;

  constructor(private rou: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
  }
  
  listar(): void {

    this.http.get("http://localhost:8989/Adopcion/consul", { responseType: "json" })
      .subscribe((res: any) => {
        console.log(res);
        this.inc=res;
      });

  }

  eliminar(x: any): void {
    this.http.delete("http://localhost:8989/Adopcion/elim/" + x)
      .subscribe((res: any) => {
        console.log(res);
        this.listar();

      });



  }

  formularioEditar(x: any): void {
    this.rou.navigate(["/gestion/editarA", x])

  }
}
