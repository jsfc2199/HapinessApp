import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //como ya estamos en el home no necesitamos redirigir

];

@NgModule({
  imports: [RouterModule.forChild(routes)], //se usa forChild por ser un modulo hijo
  exports: [RouterModule],
})
export class HomeRoutingModule {}
