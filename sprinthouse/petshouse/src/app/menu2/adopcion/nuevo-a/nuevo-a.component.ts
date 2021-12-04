import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-a',
  templateUrl: './nuevo-a.component.html',
  styleUrls: ['./nuevo-a.component.css']
})
export class NuevoAComponent implements OnInit {
  
  m: any = {
    adop_mas_id: {
      mas_id: "",
      mas_nom: "",
      mas_raz: "",
      mas_ed: ""
    },
    adop_usua_id: {
      usua_id: "",
      usua_nom: "",
      usua_ape: "",
      usua_tel: "",
      usua_doc: "",
      usua_email: "",
      usua_contr: ""
    }
  }

  constructor(private rou:Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  guardar():void{
    this.http.post("http://petshouse.jelastic.saveincloud.net/Adopcion/crear",this.m)
    .subscribe((res:any)=>{
      console.log(res);
      alert("Registrado satisfactoriamente")

      this.rou.navigate(["/gestion/consultarA"]);
  });
}
}
