import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-m',
  templateUrl: './editar-m.component.html',
  styleUrls: ['./editar-m.component.css']
})
export class EditarMComponent implements OnInit {
  m: any = {
    mas_id:"",
    mas_nom: "",
    mas_raz: "",
    mas_ed: ""
  }

  constructor(private rou: Router,private rouvar:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.m.mas_id=this.rouvar.snapshot.params["x"];
    this.http.get("http://petshouse.jelastic.saveincloud.net/Mascota/consul/"+this.m.mas_id,{ responseType:"json"})
    .subscribe((res:any)=>{
    console.log(res);
    this.m.mas_nom=res.mas_nom;
    this.m.mas_raz=res.mas_raz;
    this.m.mas_ed=res.mas_ed;


    });
  }

  actualizar(): void {
    this.http.put("http://petshouse.jelastic.saveincloud.net/Mascota/modif/" + this.m.mas_id, this.m)
      .subscribe((res:any) => {
        console.log(res);
        alert("Registrado Satisfactiamente");
        this.rou.navigate(["/gestion/consultarM"]);
      });
  }
  Cancelar():void{
    this.rou.navigate(["/gestion/consultarM"]);
  }
}
