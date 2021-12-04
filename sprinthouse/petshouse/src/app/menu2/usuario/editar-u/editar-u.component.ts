import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-u',
  templateUrl: './editar-u.component.html',
  styleUrls: ['./editar-u.component.css']
})
export class EditarUComponent implements OnInit {
  m: any = {
    usua_id: "",
    usua_nom: "",
    usua_ape: "",
    usua_tel: "",
    usua_doc: "",
    usua_email: "",
    usua_contr: ""
  }

  constructor(private rou: Router, private rouvar: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.m.usua_id = this.rouvar.snapshot.params["x"];
    this.http.get("http://petshouse.jelastic.saveincloud.net/Usuario/consul/" + this.m.usua_id, { responseType: "json" })
      .subscribe((res: any) => {
        console.log(res);
        this.m.usua_nom = res.usua_nom;
        this.m.usua_ape = res.usua_ape;
        this.m.usua_tel = res.usua_tel;
        this.m.usua_doc = res.usua_doc;
        this.m.usua_email = res.usua_email;
        this.m.usua_contr = res.usua_contr;


      });
  }

  actualizar(): void {
    this.http.put("http://petshouse.jelastic.saveincloud.net/Usuario/modif/" + this.m.usua_id, this.m)
      .subscribe((res: any) => {
        console.log(res);
        alert("Registrado Satisfactiamente");
        this.rou.navigate(["/gestion/consultarU"]);
      });
  }
  Cancelar(): void {
    this.rou.navigate(["/gestion/consultarU"]);
  }
}
