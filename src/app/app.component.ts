import {Component, OnInit} from '@angular/core';
import {res} from "./data";
import {DataTableService} from "./data-table/data-table.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private dataTableService: DataTableService) {
  }

  ngOnInit() {
      this.data = [...res];
  }
}
