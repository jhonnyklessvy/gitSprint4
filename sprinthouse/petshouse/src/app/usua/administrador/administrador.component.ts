import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {


  m: any = {
    admin_usua: "",
    admin_contr: ""
  }

  constructor(private rou: Router,private http: HttpClient) { }


  ngOnInit(): void {
  }


  iniciar(): void{
    this.http.get("http://localhost:8989/Admin/consultarPorVariosParametros/" + this.m.admin_usua + "/" + this.m.admin_contr + "", { responseType: "json" })
      .subscribe((res: any) => {
        console.log(res);

        if (res.length === 0) {
          alert("No existe el registro");
        }
        for (var x of res) {
          if (x.id === "" || x.id === null) {
            alert("No existe el registro");
          }
          else {
            alert("Bienvenido  Administrdor");
            this.rou.navigate(["/gestion/consultarU"])
          }


        }


      });

  }
}
  


