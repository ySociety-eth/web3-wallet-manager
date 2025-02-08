import { Observable } from "rxjs";

export interface DataTableColumn {
    label: string;
    property: string;
    useTemplate?: boolean;
    sort: 'ascending' | 'descending' | 'none' | 'unavailable';
    truncate?: 'middle' | [number, 'end'];
    copyToClipboard?: boolean;
    highlighData?: boolean;
    href?: (data: any) => string; //it should be called like this: href(data): `https://url.com/${data}`
    hrefTarget?: '_blank' | '_self';
}

export interface TableListItem {
    label: string;
    key: string;
    active?: boolean;
    dataTableColumns: DataTableColumn[];
    dataTableRow: any[];
    loadData: Observable<any>; //it should be called like this: loadData.pipe(map(data => data.result), shareReplay(1))
}