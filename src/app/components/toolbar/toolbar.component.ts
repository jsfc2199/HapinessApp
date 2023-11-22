import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  standalone: true, //al ser stanalone no se declara en ningun modulo
  imports: [MatToolbarModule, MatIconModule], //se importa el modulo que nos permite usar el toolbar de angular amterial
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

}
