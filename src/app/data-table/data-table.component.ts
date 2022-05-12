import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {DataTableService} from "./data-table.service";
import {filter, map} from "rxjs";

export interface Elements {
  name: string;
  value: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'value', 'icons'];
  // @ts-ignore
  dataSource: MatTableDataSource<Elements>;
  data: any;
  @Input() result: any;
  // @ts-ignore
  @Input() name: string;
  // @ts-ignore
  @ViewChild('matPaginator', {static: false}) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private dataTableService: DataTableService) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Elements>(this.result);
    this.dataTableService.tableData$.pipe(map(el => el.find(el => el.name === this.name)))
      .subscribe(res => {
        this.dataSource.data = res.value;
      })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  doFilter(e: any) {
    this.dataSource.filter = e.value.trim().toLowerCase();
  }

  onEdit(row: Elements) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: {element: this.name, value: row},
    });
  }
}

