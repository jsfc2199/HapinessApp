import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { PeopleTableComponent } from '../people-table';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, //al ser stanalone no se declara en ningun modulo
  imports: [MatToolbarModule, MatIconModule, MatDialogModule], //se importa el modulo que nos permite usar el toolbar de angular amterial
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  //inyectamos el servicio para generar mensajes como sweet alert, apoyados del modulo MatDialogModule
  constructor(public dialog: MatDialog){}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {

    //recibe un componente que va a animar
    this.dialog.open(PeopleTableComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
