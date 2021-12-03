import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-p',
  templateUrl: './editar-p.component.html',
  styleUrls: ['./editar-p.component.css']
})
export class EditarPComponent implements OnInit {
  m: any = {
    pro_id:"",
    pro_nom: "",
    pro_col: "",
    pro_pre: ""
  }

  constructor(private rou: Router,private rouvar:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.m.pro_id=this.rouvar.snapshot.params["x"];
    this.http.get("http://localhost:8989/Producto/consul/"+this.m.pro_id,{ responseType:"json"})
    .subscribe((res:any)=>{
    console.log(res);
    this.m.pro_nom=res.pro_nom;
    this.m.pro_col=res.pro_col;
    this.m.pro_pre=res.pro_pre;


    });
  }

  actualizar(): void {
    this.http.put("http://localhost:8989/Producto/modif/" + this.m.pro_id, this.m)
      .subscribe((res:any) => {
        console.log(res);
        alert("Registrado Satisfactiamente");
        this.rou.navigate(["/gestion/consultarP"]);
      });
  }
  Cancelar():void{
    this.rou.navigate(["/gestion/consultarP"]);
  }
}
