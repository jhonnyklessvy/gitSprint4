import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-u',
  templateUrl: './consultar-u.component.html',
  styleUrls: ['./consultar-u.component.css']
})
export class ConsultarUComponent implements OnInit {
  inc:any;

  constructor(private rou:Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void{

    this.http.get("http://petshouse.jelastic.saveincloud.net/Usuario/consul",{responseType:"json"})
    .subscribe((res:any)=>{

     this.inc=res;


    });

  }

  eliminar(x:any):void{
    this.http.delete("http://petshouse.jelastic.saveincloud.net/Usuario/elim/"+x)
    .subscribe((res:any)=>{
      console.log(res);
     this.listar();

    });



  }

  formularioEditar(x:any):void{
    this.rou.navigate(["/gestion/editarU",x])

  }
}
