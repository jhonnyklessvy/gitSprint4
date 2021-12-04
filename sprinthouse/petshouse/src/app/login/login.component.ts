import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  m: any = {
    usua_nom: "",
    usua_contr: ""
  }


  constructor(private rou: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  goRegistrar(): void {
    this.rou.navigate(["/registrar"]);
  }

  iniciar(): void {
    this.http.get("http://petshouse.jelastic.saveincloud.net/Usuario/consultarPorVariosParametros/" + this.m.usua_nom + "/" + this.m.usua_contr + "", { responseType: "json" })
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
            alert("Bienvenido  " + x.usua_nom +" "+ x.usua_ape);
            this.rou.navigate(["/menu/inicio"])
          }


        }


      });



  }

}
