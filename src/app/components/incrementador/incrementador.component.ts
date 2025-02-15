import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit{

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor') progreso : number = 50;
  @Input() btnClass : string = "btn-primary";

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number){
    if(this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    else if(this.progreso <= 0 && valor <= 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }else{
      this.valorSalida.emit(this.progreso + valor);
      return this.progreso = this.progreso + valor;
    }
  }

  onChange(nuevoValor: any){
    if(nuevoValor >= 100){
      this.progreso = 100;
    }else if(nuevoValor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = nuevoValor;
    }
    console.log(this.progreso);
    this.valorSalida.emit(this.progreso);
  }
}
