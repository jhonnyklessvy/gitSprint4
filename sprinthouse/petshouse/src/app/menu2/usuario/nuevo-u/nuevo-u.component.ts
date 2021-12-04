import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-u',
  templateUrl: './nuevo-u.component.html',
  styleUrls: ['./nuevo-u.component.css']
})
export class NuevoUComponent implements OnInit {
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

  guardar(): void {
    this.http.post("http://petshouse.jelastic.saveincloud.net/Usuario/crear", this.m)
      .subscribe((res: any) => {
        console.log(res);
        alert("Registrado satisfactoriamente")

        this.rou.navigate(["/gestion/consultarP"]);
      });
  }
}
