import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Elements} from "../data-table/data-table.component";
import {DataTableService} from "../data-table/data-table.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, AfterViewInit {
  // @ts-ignore
  @ViewChild('myForm', {static: false}) form: NgForm;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { element: string, value: Elements }, private dataTableService: DataTableService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.form.setValue(this.data.value);
    })
  }

  onSubmit() {
    console.log(this.form.value, this.data.element)
    this.dataTableService.edit(this.data.element, this.data.value, this.form.value);
  }

}
