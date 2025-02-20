import { Injectable } from "@angular/core";
import { DataTableColumn } from "../../../models/tables.interface";

@Injectable({
    providedIn: 'root'
})
export class TableSkeletonService {

    skeletonRows(limit: number, columns: DataTableColumn[]): any[] {
        var skeletonRow: any[] = [] 

        for(var i = 0; i < limit; i++ ) {
          let row: any = {}
          columns.forEach(value => {
            row[value.property] = 'skeleton' // sets all properties of the rows to 'skeleton'
          })
          skeletonRow.push(row); // pushes the row to the skeletonRow array
        }
        return skeletonRow// return skeleton rows format
    }
}