export interface DataTableColumn {
    label: string;
    property: string;
    sort: 'ascending' | 'descending' | 'none' | 'unavailable';
    truncate?: 'middle' | [number, 'end'];
}