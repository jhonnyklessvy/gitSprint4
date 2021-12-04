import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-m',
  templateUrl: './nuevo-m.component.html',
  styleUrls: ['./nuevo-m.component.css']
})
export class NuevoMComponent implements OnInit {
  m:any={
    mas_nom:"",
    mas_raz:"",
    mas_ed:""
  }
  constructor(private rou:Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  guardar():void{
    this.http.post("http://petshouse.jelastic.saveincloud.net/Mascota/crear",this.m)
    .subscribe((res:any)=>{
      console.log(res);
      alert("Registrado satisfactoriamente")

      this.rou.navigate(["/gestion/consultarM"]);
  });
}
}
