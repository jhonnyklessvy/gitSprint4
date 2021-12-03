import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-m',
  templateUrl: './consultar-m.component.html',
  styleUrls: ['./consultar-m.component.css']
})
export class ConsultarMComponent implements OnInit {
  inc:any;

  constructor(private rou:Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void{

    this.http.get("http://localhost:8989/Mascota/consul",{responseType:"json"})
    .subscribe((res:any)=>{

     this.inc=res;


    });

  }

  eliminar(x:any):void{
    this.http.delete("http://localhost:8989/Mascota/elim/"+x)
    .subscribe((res:any)=>{
      console.log(res);
     this.listar();

    });



  }

  formularioEditar(x:any):void{
    this.rou.navigate(["/gestion/editarM",x])

  }
}
