import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  m: any = {
    usua_nom: "",
    usua_ape: "",
    usua_tel: "",
    usua_doc: "",
    usua_email: "",
    usua_contr: ""
  }
  constructor(private rou: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  goIniciarsecion(): void {
    this.rou.navigate(["/login"]);
  }

  guardar(): void {
    this.http.post("http://localhost:8989/Usuario/crear", this.m)
      .subscribe((res: any) => {
        console.log(res);
        alert("Registrado satisfactoriamente")
        this.rou.navigate(["/menu/inicio"])
      });
  }
}
