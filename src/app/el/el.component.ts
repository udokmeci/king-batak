import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Deste, Kagit, Oyuncu, Atma} from '../oyun/oyun.component';

@Component({
  selector: 'app-el',
  templateUrl: './el.component.html',
  styleUrls: ['./el.component.css']
})
export class ElComponent implements OnInit {
  @Input() deste:Deste= new Deste();
  @Input() oyuncu:Oyuncu;
  @Output() at:EventEmitter<Atma>= new EventEmitter();
  constructor() { 
  
  }

  ngOnInit() {
  }

  atil(kart){
  	this.at.emit(new Atma(this.oyuncu, kart));
  }

}
