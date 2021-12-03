import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-v',
  templateUrl: './editar-v.component.html',
  styleUrls: ['./editar-v.component.css']
})
export class EditarVComponent implements OnInit {
  m: any = {
    ven_id: "",
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


  constructor(private rou: Router, private rouvar: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.m.ven_id = this.rouvar.snapshot.params["x"];
    this.http.get("http://localhost:8989/Venta/consul/" + this.m.ven_id, { responseType: "json" })
      .subscribe((res: any) => {
        console.log(res);
        this.m.ven_pro_id.pro_nom = res.ven_pro_id.pro_nom;
        this.m.ven_pro_id.pro_col = res.ven_pro_id.pro_col;
        this.m.ven_pro_id.pro_pre = res.ven_pro_id.pro_pre;
        this.m.ven_usua_id.usua_nom = res.ven_usua_id.usua_nom;
        this.m.ven_usua_id.usua_ape = res.ven_usua_id.usua_ape;
        this.m.ven_usua_id.usua_tel = res.ven_usua_id.usua_tel;
        this.m.ven_usua_id.usua_doc = res.ven_usua_id.usua_doc;
        this.m.ven_usua_id.usua_email = res.ven_usua_id.usua_email;
        this.m.ven_usua_id.usua_contr = res.ven_usua_id.usua_contr;


      });
  }
  actualizar(): void {
    this.http.put("http://localhost:8989/Venta/modif/" + this.m.ven_id, this.m)
      .subscribe((res: any) => {
        console.log(res);
        alert("Registrado Satisfactiamente");
        this.rou.navigate(["/gestion/consultarV"]);
      });
  }
  Cancelar(): void {
    this.rou.navigate(["/gestion/consultarV"]);
  }
}
