import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-p',
  templateUrl: './nuevo-p.component.html',
  styleUrls: ['./nuevo-p.component.css']
})
export class NuevoPComponent implements OnInit {
  m:any={
    rpo_nom:"",
    pro_col:"",
    pro_pre:""
  }
  constructor(private rou:Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  guardar():void{
    this.http.post("http://petshouse.jelastic.saveincloud.net/Producto/crear",this.m)
    .subscribe((res:any)=>{
      console.log(res);
      alert("Registrado satisfactoriamente")

      this.rou.navigate(["/gestion/consultarP"]);
  });
}
}
