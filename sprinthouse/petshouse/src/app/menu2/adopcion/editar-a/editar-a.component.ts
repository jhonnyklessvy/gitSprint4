import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-a',
  templateUrl: './editar-a.component.html',
  styleUrls: ['./editar-a.component.css']
})
export class EditarAComponent implements OnInit {

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

  constructor(private rou: Router, private rouvar: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.m.adop_id = this.rouvar.snapshot.params["x"];
    this.http.get("http://petshouse.jelastic.saveincloud.net/Adopcion/consul/" + this.m.adop_id, { responseType: "json" })
      .subscribe((res: any) => {
        console.log(res);
        this.m.adop_mas_id.mas_nom = res.adop_mas_id.mas_nom;
        this.m.adop_mas_id.mas_raz = res.adop_mas_id.mas_raz;
        this.m.adop_mas_id.mas_ed = res.adop_mas_id.mas_ed;
        this.m.adop_usua_id.usua_nom = res.adop_usua_id.usua_nom;
        this.m.adop_usua_id.usua_ape = res.adop_usua_id.usua_ape;
        this.m.adop_usua_id.usua_tel = res.adop_usua_id.usua_tel;
        this.m.adop_usua_id.usua_doc = res.adop_usua_id.usua_doc;
        this.m.adop_usua_id.usua_email = res.adop_usua_id.usua_email;
        this.m.adop_usua_id.usua_contr = res.adop_usua_id.usua_contr;


      });
  }
  actualizar(): void {
    this.http.put("http://petshouse.jelastic.saveincloud.net/Adopcion/modif/" + this.m.adop_id, this.m)
      .subscribe((res: any) => {
        console.log(res);
        alert("Registrado Satisfactiamente");
        this.rou.navigate(["/gestion/consultarA"]);
      });
  }
  Cancelar(): void {
    this.rou.navigate(["/gestion/consultarA"]);
  }
}
