import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {

  static emitirArray = new EventEmitter<string>();

  constructor() { }

  add(nome: string){

    FrutasService.emitirArray.emit(nome);
  }
}
