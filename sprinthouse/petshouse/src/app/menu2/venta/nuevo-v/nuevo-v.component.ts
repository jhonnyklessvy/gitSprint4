import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-v',
  templateUrl: './nuevo-v.component.html',
  styleUrls: ['./nuevo-v.component.css']
})
export class NuevoVComponent implements OnInit {
  m: any = {
    ven_pro_id: {
      pro_id: "",
      pro_nom: "",
      pro_col: "",
      pro_pre: ""
    },
    ven_usua_id: {
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
    this.http.post("http://petshouse.jelastic.saveincloud.net/Venta/crear",this.m)
    .subscribe((res:any)=>{
      console.log(res);
      alert("Registrado satisfactoriamente")

      this.rou.navigate(["/gestion/consultarV"]);
  });
}
}
