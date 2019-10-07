import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', { static: false }) txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log( 'Leyenda', this.leyenda );
    console.log( 'porcentaje', this.porcentaje );
  }

  // Validación campo de texto (input)
  onChanges( newValue: number ) {

    if ( newValue >= 100 ) {
      this.porcentaje = 100;
    } else if ( newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioValor.emit( this.porcentaje );

    this.txtProgress.nativeElement.focus();
  }

  // Validación botones para incrementar o decrementar
  cambiarValor( valor: number ) {

    if ( this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
    }
    if ( this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit( this.porcentaje );
  }

}
