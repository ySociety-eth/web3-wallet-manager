import { Observable } from "rxjs";

export interface DataTableColumn {
    label: string;
    readonly property: string;
    useTemplate?: boolean; // info about the use of templates in > \src\app\components\shared\data-table\template
    sort: 'ascending' | 'descending' | 'none' | 'unavailable';
    truncate?: 'middle' | [number, 'end'];
    copyToClipboard?: boolean;
    highlighData?: boolean;
    href?: (data: any) => string; //it should be called like this: href(data): `https://url.com/${data}`
    hrefTarget?: '_blank' | '_self';
    isTimestamp?: boolean;
}

export interface TableListItem {
    label: string;
    title: string;
    readonly key: string;
    active?: boolean;
    dataTableColumns: DataTableColumn[];
    dataTableRow: any[];
    loadData: Observable<any>; //it should be called like this: loadData.pipe(map(data => data.result), shareReplay(1))
    page: {
        currentPage: number;
        readonly totalPages?: number;
    }
}