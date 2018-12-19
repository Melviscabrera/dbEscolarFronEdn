import { Component } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dbEscolarFronEdn';
  materias:any[]=[]; // asi se declara un array en angualr;
  unaMateria:any = {};
  constructor(private _http:Http){
    this.getAllMaterias();
  }

  getAllMaterias():void{
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = new RequestOptions({ headers:  headers  });

    this._http.get('https://localhost:44313/api/materia',options).subscribe(data=>{
      this.materias =data.json();
    });
  }

  guardarMateria():void{
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = new RequestOptions({ headers:  headers  });
    this._http.post('https://localhost:44313/api/materia',this.unaMateria, options).subscribe(data=>{
      this.getAllMaterias();
      this.unaMateria = {};
    })
  }
}
