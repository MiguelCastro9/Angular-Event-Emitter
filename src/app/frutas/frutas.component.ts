import { FrutasService } from './frutas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {

  frutasEventEmitter: string[] = [];

  constructor(private frutasService: FrutasService) { }

  clickAddFruta(nome: string){
    this.frutasService.add(nome);
  }

  ngOnInit(): void {

    FrutasService.emitirArray.subscribe(nomes => this.frutasEventEmitter.push(nomes));
  }
}
