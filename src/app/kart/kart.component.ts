import { Component, OnInit, Input } from '@angular/core';
import {Kagit} from '../oyun/oyun.component';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit {
  @Input() kart:Kagit
  constructor() { }

  ngOnInit() {
  }

}
