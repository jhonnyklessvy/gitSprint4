import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-v',
  templateUrl: './consultar-v.component.html',
  styleUrls: ['./consultar-v.component.css']
})
export class ConsultarVComponent implements OnInit {
  inc: any;

  constructor(private rou: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
  }
  
  listar(): void {

    this.http.get("http://localhost:8989/Venta/consul", { responseType: "json" })
      .subscribe((res: any) => {
        console.log(res);
        this.inc=res;
      });

  }

  eliminar(x: any): void {
    this.http.delete("http://localhost:8989/Venta/elim/" + x)
      .subscribe((res: any) => {
        console.log(res);
        this.listar();

      });



  }

  formularioEditar(x: any): void {
    this.rou.navigate(["/gestion/editarV", x])

  }
}
