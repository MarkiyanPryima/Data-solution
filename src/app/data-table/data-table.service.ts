import {Injectable} from "@angular/core";
import {res} from "../data";
import {BehaviorSubject} from "rxjs";
import {Elements} from "./data-table.component";

@Injectable({
  providedIn: 'root',
})
export class DataTableService {
  data = [...res];
  tableData$ = new BehaviorSubject<any[]>(this.data);

  edit(element: string, oldValue: Elements, newValue: Elements) {
    let elIndex = this.data.findIndex(el => el.name === element);
    this.data = this.data.map((e, index) => {
      if (elIndex === index) {
        return {
          name: e.name, value: e.value.map(e => {
            if (JSON.stringify(e) === JSON.stringify(oldValue)) {
              return newValue;
            } else {
              return e;
            }
          })
        }
      } else {
        return e;
      }
    })

    this.tableData$.next(this.data);
  }
}
