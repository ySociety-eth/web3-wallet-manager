import { Injectable } from "@angular/core";
import { DataTableColumn } from "../../../models/tables.interface";

@Injectable({
    providedIn: 'root'
})
export class TableSortService {

    handleSort(column: DataTableColumn, dataTableColumns: DataTableColumn[]){
        dataTableColumns.forEach(col => { // sets all other columns to none
            if(col !== column && col.sort !== 'unavailable') {
                col.sort = 'none'
            }
        });

        switch (column.sort) {
            case 'none': 
              column.sort = 'descending'; break;
            case 'descending':
              column.sort = 'ascending'; break;
            case 'ascending':
              column.sort = 'none'; break;
            default:
              column.sort = 'unavailable'; break
        }
    }
} 