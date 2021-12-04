import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-p',
  templateUrl: './consultar-p.component.html',
  styleUrls: ['./consultar-p.component.css']
})
export class ConsultarPComponent implements OnInit {
  inc:any;

  constructor(private rou:Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void{

    this.http.get("http://petshouse.jelastic.saveincloud.net/Producto/consul",{responseType:"json"})
    .subscribe((res:any)=>{

     this.inc=res;


    });

  }

  eliminar(x:any):void{
    this.http.delete("http://petshouse.jelastic.saveincloud.net/Producto/elim/"+x)
    .subscribe((res:any)=>{
      console.log(res);
     this.listar();

    });



  }

  formularioEditar(x:any):void{
    this.rou.navigate(["/gestion/editarP",x])

  }
}
