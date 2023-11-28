import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { People } from 'src/app/data';
import { Person } from 'src/app/models';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-people-table',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatFormFieldModule, MatTableModule, MatInputModule],
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['id', 'name', 'category', 'company', 'levelOfHapinness'];
  dataSource: MatTableDataSource<Person>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(People);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(){

  }
}

